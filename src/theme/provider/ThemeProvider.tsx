import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { createStitches } from '@stitches/react';
import { applyWhiteLabelling } from '~/src/theme/provider/utils/applyWhiteLabelling';
import { DSTheme } from '~/src/theme/types/theme';
import { BaseTheme } from '~/src/theme/types/baseTheme';
import { WhiteLabelColors } from '~/src/theme/types';
import { baseThemes } from '~/src/theme/provider/themes';
import { breakpoints, mediaQueries } from '~/src/theme/props';

export type ThemeCtx = {
  setTheme: (themeBase: BaseTheme, colors?: WhiteLabelColors) => void;
  theme: DSTheme;
  baseTheme: BaseTheme;
  themeClass?: string;
};

const ThemeContext = createContext<ThemeCtx>({
  setTheme: () => null,
  theme: baseThemes.light,
  baseTheme: 'light',
});

const { createTheme } = createStitches({
  theme: {},
  media: mediaQueries,
});

type ThemeProviderProps = {
  whiteLabelColors?: WhiteLabelColors;
  baseTheme?: BaseTheme;
};

export const ThemeProvider = ({
  whiteLabelColors,
  baseTheme = 'light',
  children,
}: PropsWithChildren<ThemeProviderProps>) => {
  const [themeBase, setThemeBase] = useState<BaseTheme>(baseTheme);
  const [colors, setColors] = useState<WhiteLabelColors | undefined>(whiteLabelColors);

  // Merge the white-label overrides into the specified theme base.
  const composedTheme = applyWhiteLabelling(themeBase, colors);

  // In SystemUI, breakpoints and media queries are part of theme
  const systemUITheme = useMemo(
    () => ({
      ...composedTheme,
      breakpoints,
      mediaQueries,
    }),
    [composedTheme]
  );

  // In Stitches, only breakpoints are needed but they are passed into createStitches as a separate media arg
  const stitchesTheme = useMemo(() => createTheme(composedTheme), [composedTheme]);

  const { className } = stitchesTheme;

  const themeState = useMemo<ThemeCtx>(
    () => ({
      setTheme: (themeBase: BaseTheme, colors?: WhiteLabelColors) => {
        setThemeBase(themeBase);
        setColors(colors);
      },
      theme: systemUITheme,
      baseTheme: themeBase,
      themeClass: className,
    }),
    [className, systemUITheme, themeBase]
  );

  return (
    <ThemeContext.Provider value={themeState}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeCtx => useContext(ThemeContext);

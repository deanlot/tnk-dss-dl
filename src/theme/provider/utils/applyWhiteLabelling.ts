import { BaseTheme } from '~/src/theme/types/baseTheme';
import { WhiteLabelColors } from '~/src/theme/types';
import { baseThemes } from '~/src/theme/provider/themes';
import { DSTheme } from '~/src/theme/types/theme';

export const applyWhiteLabelling = (
  baseTheme: BaseTheme,
  whiteLabelColors: Partial<WhiteLabelColors> = {} as Partial<WhiteLabelColors>
): DSTheme => ({
  ...baseThemes[baseTheme],
  colors: {
    // we would want to allow explicit overrides of the colors to allow for another system to apply a color-scheme to the components.
    ...baseThemes[baseTheme].colors,
    ...whiteLabelColors,
  },
});

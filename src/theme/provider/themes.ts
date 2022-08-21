import { DSTheme } from '~/src/theme/types/theme';
import { breakpoints, dark as darkColors, light as lightColors, mediaQueries, radii, space } from '~/src/theme/props';
import { BaseTheme } from '~/src/theme/types/baseTheme';

const light: DSTheme = {
  colors: lightColors,
  space,
  radii,
  mediaQueries,
  breakpoints,
};

export const dark: DSTheme = {
  ...light,
  colors: darkColors,
};

//I know this is the same as the dark theme, but this is just an example, IRL this would be a RGB friendly scheme of colors for our users.
export const rg: DSTheme = {
  ...light,
  colors: darkColors,
};

type BaseThemes = {
  [name in BaseTheme]: DSTheme;
};

export const baseThemes: BaseThemes = {
  light,
  dark,
  rg,
};

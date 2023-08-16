import { Breakpoints, Colors, MediaQueries, Radii, Space } from '~/src/theme/props';

export type DSTheme = {
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  colors: Colors;
  radii: Radii;
  space: Space;

  /*
  Things I will not impliment (but would IRL) as they would be too much effort right now.
   */
  borderStyles: { [token in number | string]: boolean | number | string };
  // borderWidths: BorderWidths;
  // fonts: Fonts;
  // fontSizes: FontSizes;
  // fontWeights: FontWeights;
  // letterSpacings: LetterSpacings;
  // lineHeights: LineHeights;
  // shadows: { [token in number | string]: boolean | number | string };
  // transitions: { [token in number | string]: boolean | number | string };
  // zIndices: { [token in number | string]: boolean | number | string };
};

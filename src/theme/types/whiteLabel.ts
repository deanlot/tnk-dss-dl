import { Colors } from '~/src/theme/props';

/*
This would allow for another app in the company to re-use the same primitives, but apply a unique color theme to the specified properties below.
 */
export type WhiteLabelColors = Omit<Colors, 'transparent'>;

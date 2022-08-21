import { breakpoints } from '~/src/theme/props/breakpoints';

export type MediaQueries = {
  /**
   * (min-width: ${breakpoints.mobile})
   */
  mobile: string;
  /**
   * (min-width: ${breakpoints.tablet})
   */
  tablet: string;
  /**
   * (min-width: ${breakpoints.ld})
   */
  ld: string;
  /**
   * (min-width: ${breakpoints.hd})
   */
  hd: string;
  /**
   * (min-width: ${breakpoints.uhd})
   */
  uhd: string;
};

export const mediaQueries: MediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  ld: `(min-width: ${breakpoints.ld})`,
  hd: `(min-width: ${breakpoints.hd})`,
  uhd: `(min-width: ${breakpoints.uhd})`,
};

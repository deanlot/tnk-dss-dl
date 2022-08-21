export type Breakpoints = {
  /**
   * 0px
   */
  mobile: string;
  /**
   * 540px
   */
  tablet: string;
  /**
   * 1024px
   */
  ld: string;
  /**
   * 1440px
   */
  hd: string;
  /**
   * 1728px
   */
  uhd: string;
};

export const breakpoints: Breakpoints = {
  mobile: '0px',
  tablet: '540px',
  ld: '1024px',
  hd: '1440px',
  uhd: '1728px',
};

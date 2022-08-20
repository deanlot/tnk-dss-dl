import React from 'react';
import { MdxLayout } from '~/layout';
import { ThemeProvider } from 'theme-ui'

import { themeWithVariants } from './variants';

export const Layout = props => (
  <ThemeProvider theme={themeWithVariants}>
    <MdxLayout {...props} />
  </ThemeProvider >
);

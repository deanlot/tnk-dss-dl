import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <CssLayout
      logo={
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          width="180px"
        />
      }
      {...rest}
    />
  </MDXProvider>
);

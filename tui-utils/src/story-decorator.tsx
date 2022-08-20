import React from 'react';
import { ThemeProvider } from 'theme-ui'
import { themeWithVariants } from './variants';

export const layout = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeWithVariants}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: { layout: "centered" }
};
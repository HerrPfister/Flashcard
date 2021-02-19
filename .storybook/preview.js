import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
  withDesign,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

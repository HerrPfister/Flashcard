import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { CssBaseline } from '@material-ui/core';

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
  withDesign,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

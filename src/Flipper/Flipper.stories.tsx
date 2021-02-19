import React from 'react';
import { Story } from '@storybook/react';
import { makeStyles, createStyles } from '@material-ui/core';

import Flipper, { FlipperProps } from './Flipper';

const useStyles = makeStyles(() =>
  createStyles({
    root: { maxWidth: 800 },
  }),
);

const Template: Story<FlipperProps> = ({ children, ...args }: FlipperProps) => {
  const classes = useStyles();

  return <Flipper {...args}>{children}</Flipper>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'What is a story in storybook?',
};

export const DefaultStory: Story<FlipperProps> = () => {
  const classes = useStyles();

  return <Flipper />;
};

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flipper',
  component: DefaultStory,
};

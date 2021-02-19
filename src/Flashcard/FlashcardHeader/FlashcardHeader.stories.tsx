import React from 'react';
import { Story } from '@storybook/react';
import { makeStyles, createStyles } from '@material-ui/core';

import FlashcardHeader, { FlashcardHeaderProps } from './FlashcardHeader';

const useStyles = makeStyles(() =>
  createStyles({
    root: { maxWidth: 800 },
  }),
);

const Template: Story<FlashcardHeaderProps> = (args: FlashcardHeaderProps) => {
  const classes = useStyles();

  return <FlashcardHeader {...args}>{args.children}</FlashcardHeader>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'Flashcard Header',
};

export const DefaultStory: Story<FlashcardHeaderProps> = () => {
  const classes = useStyles();

  return <FlashcardHeader />;
};

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard/Header',
  component: DefaultStory,
};

import React from 'react';
import { Story } from '@storybook/react';
import { makeStyles, createStyles } from '@material-ui/core';

import Flashcard, { FlashcardProps } from './Flashcard';

const useStyles = makeStyles(() =>
  createStyles({
    root: { maxWidth: 800 },
  }),
);

const Template: Story<FlashcardProps> = (args: FlashcardProps) => {
  const classes = useStyles();

  return <Flashcard {...args}>{args.children}</Flashcard>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'What is a story in storybook?',
};

export const DefaultStory: Story<FlashcardProps> = () => {
  const classes = useStyles();

  return <Flashcard />;
};

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard',
  component: DefaultStory,
};

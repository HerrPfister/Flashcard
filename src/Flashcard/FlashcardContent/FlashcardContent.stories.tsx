import React from 'react';
import { Story } from '@storybook/react';
import { makeStyles, createStyles } from '@material-ui/core';

import FlashcardContent, { FlashcardContentProps } from './FlashcardContent';

const useStyles = makeStyles(() =>
  createStyles({
    root: { maxWidth: 800 },
  }),
);

const Template: Story<FlashcardContentProps> = ({ children, ...args }: FlashcardContentProps) => {
  const classes = useStyles();

  return <FlashcardContent {...args}>{children}</FlashcardContent>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'Flashcard Content',
};

export const DefaultStory: Story<FlashcardContentProps> = () => {
  const classes = useStyles();

  return <FlashcardContent />;
};

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard/Content',
  component: DefaultStory,
};

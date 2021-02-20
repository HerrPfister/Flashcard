import React from 'react';
import { Story } from '@storybook/react';

import Flashcard, { FlashcardProps } from './Flashcard';

const Template: Story<FlashcardProps> = ({ ...args }: FlashcardProps) => <Flashcard {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  back: 'An open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.',
  front: 'What is storybook?',
  FrontSideProps: { elevation: 1, variant: 'elevation', square: true },
  BackSideProps: { elevation: 1, variant: 'elevation', square: true },
  startFlipped: false,
  disabled: false,
};

export const DefaultStory: Story<FlashcardProps> = () => <Flashcard back="Side B" front="Side A" />;

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard',
  component: DefaultStory,
};

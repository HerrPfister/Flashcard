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

Playground.argTypes = {
  back: { description: 'Content to be rendered on the back side of the flashcard.' },
  front: { description: 'Content to be rendered on the front side of the flashcard.' },
  FrontSideProps: {
    description: `These are the properties passed to the front side paper component.<br/><br/>
      **elevation:** will change the shadow depth, corresponds to dp. It accepts values between 0 and 24 inclusive..<br/>
      **variant:** will change the rendered style of the paper component. Accepts elevation or outlined.<br/>
      **square:** if true rounded corners are removed.<br/>
      [See the material ui paper docs](https://material-ui.com/components/paper)`,
  },
  BackSideProps: {
    description: `These are the properties passed to the back side paper component.<br/><br/>
      **elevation:** will change the shadow depth, corresponds to dp. It accepts values between 0 and 24 inclusive..<br/>
      **variant:** will change the rendered style of the paper component. Accepts elevation or outlined.<br/>
      **square:** if true rounded corners are removed.<br/>
      [See the material ui paper docs](https://material-ui.com/components/paper)`,
  },
  startFlipped: { description: 'If set to true the card will be rendered back side up.' },
  disabled: { description: 'If set to true the cards flipping functionality will be disabled.' },
};

export const DefaultStory: Story<FlashcardProps> = () => <Flashcard back="Side B" front="Side A" />;

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard',
  component: DefaultStory,
};

export const FlippedStory: Story<FlashcardProps> = () => <Flashcard back="Side B" front="Side A" startFlipped={true} />;

FlippedStory.storyName = 'Flipped';

export const DisabledStory: Story<FlashcardProps> = () => <Flashcard back="Side B" front="Side A" disabled={true} />;

DisabledStory.storyName = 'Disabled';

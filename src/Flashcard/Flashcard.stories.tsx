import React from 'react';
import { Story } from '@storybook/react';

import Flashcard, { FlashcardProps } from './Flashcard';

const Template: Story<FlashcardProps> = ({ ...args }: FlashcardProps) => <Flashcard {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  Back: 'An open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.',
  BackSideProps: { elevation: 1, variant: 'elevation', square: true },
  disabled: false,
  Front: 'What is storybook?',
  FrontSideProps: { elevation: 1, variant: 'elevation', square: true },
  startFlipped: false,
};

Playground.argTypes = {
  Back: { description: 'Content to be rendered on the back side of the flashcard.' },
  BackSideProps: {
    description: `These are the properties passed to the back side paper component.<br/><br/>
      **elevation:** will change the shadow depth, corresponds to dp. It accepts values between 0 and 24 inclusive..<br/>
      **variant:** will change the rendered style of the paper component. Accepts elevation or outlined.<br/>
      **square:** if true rounded corners are removed.<br/>
      [See the material ui paper docs](https://material-ui.com/components/paper)`,
  },
  Front: { description: 'Content to be rendered on the front side of the flashcard.' },
  FrontSideProps: {
    description: `These are the properties passed to the front side paper component.<br/><br/>
      **elevation:** will change the shadow depth, corresponds to dp. It accepts values between 0 and 24 inclusive..<br/>
      **variant:** will change the rendered style of the paper component. Accepts elevation or outlined.<br/>
      **square:** if true rounded corners are removed.<br/>
      [See the material ui paper docs](https://material-ui.com/components/paper)`,
  },
  disabled: { description: 'If set to true the cards flipping functionality will be disabled.' },
  showBackSideAdornment: { description: 'Show an adornment to indicate the user is looking at the back side.' },
  showFrontSideAdornment: { description: 'Show an adornment to indicate the user is looking at the front side.' },
  startFlipped: { description: 'If set to true the card will be rendered back side up.' },
};

export const DefaultStory: Story<FlashcardProps> = () => <Flashcard Back="Side B" Front="Side A" />;

DefaultStory.storyName = 'Default';

export default {
  title: 'Layout/Flashcard',
  component: DefaultStory,
};

export const FlippedStory: Story<FlashcardProps> = () => <Flashcard Back="Side B" Front="Side A" startFlipped={true} />;

FlippedStory.storyName = 'Flipped';

export const DisabledStory: Story<FlashcardProps> = () => <Flashcard Back="Side B" Front="Side A" disabled={true} />;

DisabledStory.storyName = 'Disabled';

export const FrontSideAdornmentStory: Story<FlashcardProps> = () => (
  <Flashcard Back="Side B" Front="Side A" showFrontSideAdornment={true} showBackSideAdornment={false} />
);

FrontSideAdornmentStory.storyName = 'Front Side Adornment';

export const DoubleAdornment: Story<FlashcardProps> = () => (
  <Flashcard Back="Side B" Front="Side A" showFrontSideAdornment={true} />
);

DoubleAdornment.storyName = 'Double Adornment';

export const NoAdornment: Story<FlashcardProps> = () => (
  <Flashcard Back="Side B" Front="Side A" showBackSideAdornment={false} />
);

NoAdornment.storyName = 'No Adornment';

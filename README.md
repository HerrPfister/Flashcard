# Flashcard

A simple `flashcard` component to demonstrate storybook and the css flip animation.

> This is an example for [DEV article](https://dev.to/herrpfister/storybook-experience-your-components-in-isolation-e61) that I wrote. However, it is still a fully functional component. Use it however you want!

## How to use?

```tsx
<div>
    <Flashcard Back="This is the back of the card." Front="This is the front of the card." />
    <Flashcard Back={<Typography>This is a styled card back</Typography>} Front={<Typography>This is a styled card front</Typography>} />
</div>
```

## Props

| prop                   | type      | default | description                                                                                    |
| ---------------------- | --------- | :-----: | ---------------------------------------------------------------------------------------------- |
| Back                   | ReactNode |    -    | Content to render on the backside of the card.                                                 |
| BackSideProps          | object    |    -    | See the [material-ui docs](https://material-ui.com/api/paper/) for available props.            |
| Front                  | ReactNode |    -    | Content to render on the frontside of the card.                                                |
| FrontSideProps         | object    |    -    | See the [material-ui docs](https://material-ui.com/api/paper/) for available props.            |
| disabled               | boolean   |  false  | Should the card be disabled?                                                                   |
| showBackSideAdornment  | boolean   |  true   | Should the card have an adornment to indicate the user is looking at the backside of the card? |
| showFrontSideAdornment | boolean   |  false  | Should the card have an adornment to indicate the user is looking at the backside of the card? |
| startFlipped           | boolean   |  false  | Should the card render with the backside facing up?                                            |
| onClick                | function  |  noop   | Callback to call when the user clicks on the flashcard                                         |
| className              | string    |    -    | Additional class to add to the component.                                                      |
import React from 'react';
import clsx from 'clsx';
import { createStyles, CardProps, Card, makeStyles, Theme } from '@material-ui/core';

export type FlashcardProps = CardProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 400,
      height: 200,
    },
  }),
);

const Flashcard = ({ children, className, ...props }: FlashcardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card {...props} className={clsx(classes.container, className)}>
      {children}
    </Card>
  );
};

export default Flashcard;

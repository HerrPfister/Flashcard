import React from 'react';
import clsx from 'clsx';
import { createStyles, CardContentProps, makeStyles, Theme, CardContent } from '@material-ui/core';

export type FlashcardContentProps = CardContentProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
  }),
);

const FlashcardContent = ({ children, className, ...props }: FlashcardContentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <CardContent {...props} className={clsx(classes.container, className)}>
      {children}
    </CardContent>
  );
};

export default FlashcardContent;

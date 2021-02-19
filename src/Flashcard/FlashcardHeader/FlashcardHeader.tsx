import React from 'react';
import clsx from 'clsx';
import { createStyles, CardHeaderProps, makeStyles, Theme, CardHeader } from '@material-ui/core';

export type FlashcardHeaderProps = CardHeaderProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
  }),
);

const FlashcardHeader = ({ children, className, ...props }: FlashcardHeaderProps): JSX.Element => {
  const classes = useStyles();

  return <CardHeader title={children} {...props} className={clsx(classes.container, className)} />;
};

export default FlashcardHeader;

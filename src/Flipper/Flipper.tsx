import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { createStyles, Card, makeStyles, Theme } from '@material-ui/core';

export type FlipperProps = {
  className?: string;
  children?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
  }),
);

const Flipper = ({ children, className, ...props }: FlipperProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card {...props} className={clsx(classes.container, className)}>
      {children}
    </Card>
  );
};

export default Flipper;

import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { createStyles, Paper, makeStyles, PaperProps, Theme } from '@material-ui/core';

export type FlashcardProps = {
  className?: string;
  front: ReactNode;
  back: ReactNode;
  startFlipped?: boolean;
  disabled?: boolean;
  FrontSideProps?: PaperProps;
  BackSideProps?: PaperProps;
  onClick?: (flipped: boolean) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'transparent',
      width: 300,
      height: 200,
      perspective: 1000,
    },
    inner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    flipped: {
      transform: 'rotateY(180deg)',
    },
    side: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 300,
      height: 200,
      backfaceVisibility: 'hidden',
      padding: theme.spacing(2),
    },
    // TODO: Get this working
    // disabled: {
    //   backgroundColor: theme.palette.common.black,
    //   opacity: 0.75,
    // },
    back: {
      transform: 'rotateY(180deg)',
    },
  }),
);

const Flashcard = ({
  front,
  FrontSideProps,
  back,
  BackSideProps,
  className,
  startFlipped,
  disabled,
  onClick,
  ...props
}: FlashcardProps): JSX.Element => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState(startFlipped || false);

  const handleClick = () => {
    if (disabled) return;

    const newFlipped = !flipped;

    setFlipped(newFlipped);

    if (onClick) onClick(newFlipped);
  };

  return (
    <div {...props} className={clsx(classes.container, className)} onClick={handleClick}>
      <div className={clsx(classes.inner, { [classes.flipped]: flipped }, { [classes.disabled]: disabled })}>
        <Paper {...FrontSideProps} className={clsx(FrontSideProps?.className, classes.side)}>
          {front}
        </Paper>
        <Paper {...BackSideProps} className={clsx(BackSideProps?.className, classes.back, classes.side)}>
          {back}
        </Paper>
      </div>
    </div>
  );
};

export default Flashcard;

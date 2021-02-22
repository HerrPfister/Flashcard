import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { createStyles, Paper, makeStyles, PaperProps, Theme } from '@material-ui/core';

export type FlashcardProps = {
  BackSideProps?: PaperProps;
  FrontSideProps?: PaperProps;
  back: ReactNode;
  className?: string;
  disabled?: boolean;
  front: ReactNode;
  onClick?: (flipped: boolean) => void;
  startFlipped?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'transparent',
      width: 300,
      height: 200,
      perspective: 1000,
      padding: 0,
      margin: 0,
      border: 0,
      '&:focus': {
        outline: 'none',
      },
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
        '&$disabled': {
          cursor: 'not-allowed',
        },
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
    disabled: {
      backgroundColor: 'rgba(249, 249, 249, 0.25)',
    },
    back: {
      transform: 'rotateY(180deg)',
    },
  }),
);

const Flashcard = ({
  back,
  front,
  BackSideProps,
  FrontSideProps,
  className,
  startFlipped = false,
  disabled = false,
  onClick = () => {},
  ...props
}: FlashcardProps): JSX.Element => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState(startFlipped);

  const handleClick = () => {
    const newFlipped = !flipped;

    setFlipped(newFlipped);

    onClick(newFlipped);
  };

  return (
    <button {...props} className={clsx(classes.container, className)} onClick={handleClick} disabled={disabled}>
      <div className={clsx(classes.inner, { [classes.flipped]: flipped }, { [classes.disabled]: disabled })}>
        <Paper
          {...FrontSideProps}
          className={clsx(FrontSideProps?.className, classes.side, { [classes.disabled]: disabled })}
        >
          {front}
        </Paper>
        <Paper
          {...BackSideProps}
          className={clsx(BackSideProps?.className, classes.back, classes.side, { [classes.disabled]: disabled })}
        >
          {back}
        </Paper>
      </div>
    </button>
  );
};

export default Flashcard;

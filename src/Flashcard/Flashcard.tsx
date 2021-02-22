import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { createStyles, Paper, makeStyles, PaperProps, Theme } from '@material-ui/core';

export type FlashcardProps = {
  Back: ReactNode;
  BackSideProps?: PaperProps;
  className?: string;
  disabled?: boolean;
  Front: ReactNode;
  FrontSideProps?: PaperProps;
  onClick?: (flipped: boolean) => void;
  showBackSideAdornment?: boolean;
  showFrontSideAdornment?: boolean;
  startFlipped?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    adornment: {
      '&::after': {
        content: "''",
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 15px 15px 0',
        right: 0,
        top: 0,
        position: 'absolute',
      },
    },
    back: {
      transform: 'rotateY(180deg)',
      '&::after': {
        borderColor: `transparent ${theme.palette.secondary.light} transparent transparent`,
      },
    },
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
    disabled: {
      backgroundColor: 'rgba(249, 249, 249, 0.25)',
    },
    flipped: {
      transform: 'rotateY(180deg)',
    },
    front: {
      transform: 'rotateY(0deg)',
      '&::after': {
        borderColor: `transparent ${theme.palette.primary.light} transparent transparent`,
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
    side: {
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      display: 'flex',
      height: 200,
      justifyContent: 'center',
      padding: theme.spacing(2),
      position: 'absolute',
      width: 300,
    },
  }),
);

const Flashcard = ({
  Back,
  BackSideProps,
  disabled = false,
  className,
  Front,
  FrontSideProps,
  showBackSideAdornment = true,
  showFrontSideAdornment = false,
  startFlipped = false,
  onClick = () => {},
}: FlashcardProps): JSX.Element => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState(startFlipped);

  const handleClick = () => {
    const newFlipped = !flipped;

    setFlipped(newFlipped);

    onClick(newFlipped);
  };

  return (
    <button className={clsx(classes.container, className)} onClick={handleClick} disabled={disabled}>
      <div className={clsx(classes.inner, { [classes.flipped]: flipped }, { [classes.disabled]: disabled })}>
        <Paper
          {...FrontSideProps}
          className={clsx(
            FrontSideProps?.className,
            classes.front,
            classes.side,
            { [classes.disabled]: disabled },
            { [classes.adornment]: showFrontSideAdornment },
          )}
        >
          {Front}
        </Paper>
        <Paper
          {...BackSideProps}
          className={clsx(
            BackSideProps?.className,
            classes.back,
            classes.side,
            { [classes.disabled]: disabled },
            { [classes.adornment]: showBackSideAdornment },
          )}
        >
          {Back}
        </Paper>
      </div>
    </button>
  );
};

export default Flashcard;

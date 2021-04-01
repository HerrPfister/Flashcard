import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Chance from 'chance';

import Flashcard from './Flashcard';

const chance = new Chance();

describe('Flashcard', () => {
  it('should render', () => {
    const givenFront = chance.word();
    const givenBack = chance.word();

    render(<Flashcard Front={givenFront} Back={givenBack} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(screen.getByText(givenFront)).toBeInTheDocument();
    expect(screen.getByText(givenBack)).toBeInTheDocument();
  });

  describe('when the flashcard is clicked', () => {
    it('should flip the card', () => {
      const onClickMock = jest.fn();

      render(<Flashcard Front={chance.word()} Back={chance.word()} onClick={onClickMock} />);

      const button = screen.getByRole('button');

      act(() => {
        userEvent.click(button);
      });

      expect(onClickMock).toHaveBeenCalledWith(true);

      act(() => {
        userEvent.click(button);
      });

      expect(onClickMock).toHaveBeenCalledWith(false);
    });
  });

  describe('when disabled is passed in', () => {
    it('should disable the card', () => {
      const onClickMock = jest.fn();

      render(<Flashcard Front={chance.word()} Back={chance.word()} onClick={onClickMock} disabled={true} />);

      const button = screen.getByRole('button');

      act(() => {
        userEvent.click(button);
      });

      expect(onClickMock).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });
  });

  describe('when startFlipped is passed in', () => {
    it('should render a flipped card', () => {
      const onClickMock = jest.fn();

      render(<Flashcard Front={chance.word()} Back={chance.word()} onClick={onClickMock} startFlipped={true} />);

      const button = screen.getByRole('button');

      act(() => {
        userEvent.click(button);
      });

      expect(onClickMock).toHaveBeenCalledWith(false);

      act(() => {
        userEvent.click(button);
      });

      expect(onClickMock).toHaveBeenCalledWith(true);
    });
  });
});

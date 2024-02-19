import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './header';

test('reset button', () => {
      // Arrange
  const onClickMock = jest.fn(); // Mock the callback function

  // Act
  render(<Header onReset={onClickMock} />);
  const button = screen.getByText('Reset');
  fireEvent.click(button);

  // Assert
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

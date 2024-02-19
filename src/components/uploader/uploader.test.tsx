import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Uploader from './uploader';

test('render uploader and upload', () => {
      // Arrange
  const onFileChange = jest.fn(); // Mock the callback function

  // Act
  render(<Uploader onFileChange={onFileChange}/>);
  const fileInput = screen.getByRole('file-input'); 

  const file = new File(['file content'], 'file.txt', { type: 'text/plain' });
  fireEvent.change(fileInput, { target: { files: [file] } });

  // Assert
  expect(onFileChange).toHaveBeenCalledTimes(1);
});

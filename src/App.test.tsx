import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('render app', () => {
  // Arrange

  // Act
  render(<App />);
  const resetButton = screen.getByText(/reset/i);
  const uploader = screen.getByText(/Click to upload a .txt file/i);

  // Assert
  expect(resetButton).toBeInTheDocument();
  expect(uploader).toBeInTheDocument();
});

test('render app and upload a file', async () => {
  // Arrange
  const content = 'I have uploaded the file whose name is file .txt';
  const file = new File([content], 'file.txt', { type: 'text/plain' });

  // Act
  render(<App />);
  const fileInput = screen.getByRole('file-input');
  fireEvent.change(fileInput, { target: { files: [file] } });

  // Assert
  await waitFor(() => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText(1)).toBeInTheDocument();
  });
});

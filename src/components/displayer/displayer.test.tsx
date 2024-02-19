import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Displayer } from './displayer';

test('render displayer with null content', () => {
    // Arrange

    // Act
    render(<Displayer content={null} repeatedCount={null} />);
    const element = screen.getByText('Please upload a file to read');

    // Assert
    expect(element).toBeInTheDocument();
});

test('render displayer with content', () => {
    // Arrange
    const content = 'I have uploaded the file whose name is file .txt';
    // Act
    render(<Displayer content={content} repeatedCount={1} />);
    const contentElement = screen.getByText(content);
    const counterElement = screen.getByText(1);

    // Assert
    expect(contentElement).toBeInTheDocument();
    expect(counterElement).toBeInTheDocument();
});

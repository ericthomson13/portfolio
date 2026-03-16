import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About Component', () => {
  test('renders about section title', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  test('renders with correct styling', () => {
    render(<About />);
    const aboutDiv = screen.getByText('About Me');
    expect(aboutDiv).toHaveClass('content-center', 'w-full');
  });
});
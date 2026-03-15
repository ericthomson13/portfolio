import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from './Blog';

describe('Blog Component', () => {
  test('renders blog page content', () => {
    render(<Blog />);
    expect(screen.getByText('Blog Page')).toBeInTheDocument();
  });
});
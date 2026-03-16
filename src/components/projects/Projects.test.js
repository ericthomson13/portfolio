import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders projects page content', () => {
    render(<Projects />);
    expect(screen.getByText('Projects Page')).toBeInTheDocument();
  });
});
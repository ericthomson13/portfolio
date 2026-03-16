import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactMe from './ContactMe';

describe('ContactMe Component', () => {
  test('renders contact page content', () => {
    render(<ContactMe />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
});
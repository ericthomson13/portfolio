import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Photography from './Photography';

describe('Photography Component', () => {
  test('renders photography page content', () => {
    render(<Photography />);
    expect(screen.getByText('Photography Page')).toBeInTheDocument();
  });
});
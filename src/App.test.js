// Mocks are now in __mocks__
// Mock the individual components since they are simple
jest.mock('./components/home/Home', () => () => 'Home Page');
jest.mock('./components/about/About', () => () => 'About Me');
jest.mock('./components/projects/Projects', () => () => 'Projects Page');
jest.mock('./components/blog/Blog', () => () => 'Blog Page');
jest.mock('./components/photography/Photography', () => () => 'Photography Page');
jest.mock('./components/contactMe/ContactMe', () => () => 'Contact Me');

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders header with name and title', () => {
    render(<App />);
    expect(screen.getByText('Eric Thomson')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Software Engineer')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByTestId('link-/')).toBeInTheDocument();
    expect(screen.getByTestId('link-/about')).toBeInTheDocument();
    expect(screen.getByTestId('link-/projects')).toBeInTheDocument();
    expect(screen.getByTestId('link-/blog')).toBeInTheDocument();
    expect(screen.getByTestId('link-/photography')).toBeInTheDocument();
    expect(screen.getByTestId('link-/contact-me')).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    render(<App />);
    expect(screen.getByTestId('social-icon-http://linkedin.com/in/eric-david-thomson')).toBeInTheDocument();
    expect(screen.getByTestId('social-icon-https://www.instagram.com/eric.thomson13/')).toBeInTheDocument();
  });

  test('renders routes container', () => {
    render(<App />);
    expect(screen.getByTestId('routes')).toBeInTheDocument();
  });

  test('renders browser router wrapper', () => {
    render(<App />);
    expect(screen.getByTestId('browser-router')).toBeInTheDocument();
  });
});
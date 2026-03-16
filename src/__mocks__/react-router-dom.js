const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'browser-router' }, children),
  Routes: ({ children }) => React.createElement('div', { 'data-testid': 'routes' }, children),
  Route: ({ element }) => element,
  Link: ({ children, to }) => React.createElement('a', { href: to, 'data-testid': `link-${to}` }, children),
};
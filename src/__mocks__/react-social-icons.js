const React = require('react');

module.exports = {
  SocialIcon: ({ url, network }) => React.createElement('div', { 'data-testid': `social-icon-${url}`, href: url }),
};
import React from 'react';

const Alert = React.lazy(() => import('./components/alert/alert'));
const Button = React.lazy(() => import('./components/button/button'));

export {
  Alert,
  Button
}
import React from 'react';
import Alert from './alert.jsx';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import Readme from './alert.md';

// eslint-disable-next-line no-undef
storiesOf('Alert', module)
  .add(
    'Alert Component',
    () => {
      const label = text('label', 'In lorem ipsum dolor sit amet', 'Main');
      const color = select('color', ['fuchsia', 'teal'], 'fuchsia', 'Main');

      return (
        <div>
          <Alert
            color={color}>
            {label}
          </Alert>
        </div>
      )
    },
    {
      notes: { markdown: Readme },
    }
  );
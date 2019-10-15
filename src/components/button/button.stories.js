import React from 'react';
import Button from './button.jsx';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Readme from './button.md';

// eslint-disable-next-line no-undef
storiesOf('Button', module)
  .add(
    'Button Component',
    () => {
      const label = text('label', 'My Button', 'Main');
      const type = select('type', ['primary', 'secondary', 'tertiary'], 'primary', 'Main');
      const color = select('color', ['fuchsia', 'teal', 'white'], 'fuchsia', 'Main');
      const size = select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md', 'Main');
      const disabled = boolean('disabled', false, 'States');
      const loading = boolean('loading', false, 'States');

      return (
        <div>
          <Button
            onClick={action('button-click')}
            disabled={!!disabled}
            loading={!!loading}
            type={type}
            color={color}
            size={size}>
            {label}
          </Button>
        </div>
      )
    },
    {
      notes: { markdown: Readme },
    }
  );
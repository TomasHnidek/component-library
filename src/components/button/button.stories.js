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
      const design = select('design', ['', 'outline', 'clear'], '', 'Main');
      
      return (
        <div>
          <Button
            design={design}>
            {label}
          </Button>
        </div>
      )
    },
    {
      notes: { markdown: Readme },
    }
  );
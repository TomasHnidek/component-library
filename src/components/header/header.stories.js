import React from 'react';
import Header from './header.jsx';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Readme from './header.md';

// eslint-disable-next-line no-undef
storiesOf('Header', module)
  .add(
    'Header Component',
    () => {
      const label = text('label', 'My Button', 'Main');
      const design = select('design', ['', 'outline', 'clear'], '', 'Main');
      
      return (
        <div>
          <Header />
        </div>
      )
    },
    {
      notes: { markdown: Readme },
    }
  );
import React from 'react';
import Form from './form';
import Fieldset from './form-fieldset';
import Input from './form-input';
import { storiesOf } from '@storybook/react';
import Readme from './form.md';

// eslint-disable-next-line no-undef
storiesOf('Alert', module)
  .add(
    'Alert Component',
    () => {
      return (
        <Form onSubmit={() => {}} onCancel={() => {}}>
          <Fieldset>
            <Input type="text" name="firstName" label="First Name" value="" validation={{ required: true }} />
            <Input type="text" name="lastName" label="Last Name" value="" validation={{ required: true }} />
            <Input type="text" name="email" label="Email" value="" validation={{ required: true }} />
            <Input type="text" name="shortText" label="Short text" value="" />
            <Input type="text" name="number" label="Number (0 - 100)" value="" validation={{ required: true, type: 'number', min: 0, max: 100 }} />
          </Fieldset>
        </Form>
      )
    },
    {
      notes: { markdown: Readme },
    }
  );
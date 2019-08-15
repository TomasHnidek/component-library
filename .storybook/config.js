import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  options: {
    name: 'Monster Platform'
  },
  backgrounds: [
    { name: 'White', value: '#ffffff' },
    { name: 'Light Grey', value: '#dddddd', default: true},
    { name: 'Dark Grey', value: '#888888' },
    { name: 'Black', value: '#000000' },
    { name: 'B2C - Jacarta', value: '#3d2462' },
    { name: 'B2C - Deep Cerulean', value: '#008b9a' },
    { name: 'B2C - Fuchsia Pink', value: '#b557af' },
    { name: 'B2B - Blue Lagoon', value: '#007d91' },
    { name: 'B2B - Chambray', value: '#3b5998' },
    { name: 'B2B - Pacific Blue', value: '#00b6b4' },
  ],
});

addDecorator(withA11y);
addDecorator(centered);
addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

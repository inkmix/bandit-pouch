import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Popover } from 'bandit-pouch';
import { Button } from 'react-bootstrap';

// Knobs
const tooltipText = () => text('text', 'You are hovering me!');

// Actions

// Component
const withComponent = propsFn => (
  <Popover {...propsFn()} text={tooltipText()}>
    <Button>Hover me!</Button>
  </Popover>
);

storiesOf('UI|Popover', module)
  .addDecorator(withComponent)
  .add('default', () => ({}));
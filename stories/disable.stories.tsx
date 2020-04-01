import React from 'react';
import { PARAM_KEY } from '../src/constants';
import { TestComponent } from './TestComponent';

export default {
  title: 'Disable parameter',
  parameters: {
    [PARAM_KEY]: {
      disable: true,
    },
  },
};

export const GlobalDecoratorDisable = () => <TestComponent />;

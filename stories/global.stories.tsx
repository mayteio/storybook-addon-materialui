import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'Global Decorator',
};

// Should take decorator from global
export const GlobalDecorator1 = () => <TestComponent />;
export const GlobalDecoratorDisable = () => <TestComponent />;
GlobalDecoratorDisable.storybook = {
  materialui: {
    disable: true,
  },
};

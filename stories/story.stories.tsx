import React from 'react';
import TestComponent from './TestComponent';
import { withMuiTheme, darkPinkTheme, lightGreenTheme } from '../dist';

export default {
  title: 'Tests',
  component: TestComponent,
  decorators: [withMuiTheme()],
};

// Should take decorator from CFS
export const DefaultMuiTheme = () => <TestComponent />;

// should be overridden with story level theme
export const CustomMuiThemes = () => <TestComponent />;
CustomMuiThemes.story = {
  decorators: [
    withMuiTheme({
      'Dark Pink Theme': darkPinkTheme,
      'Light Green Theme': lightGreenTheme,
    }),
  ],
};

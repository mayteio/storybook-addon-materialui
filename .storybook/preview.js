import { addDecorator } from '@storybook/react';
import { withMuiTheme, lightBlueTheme, lightGreenTheme } from '../dist';

addDecorator(
  withMuiTheme({
    'Light Blue Theme': lightBlueTheme,
    'Light Green Theme': lightGreenTheme,
  })
);

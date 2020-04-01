import { makeDecorator } from '@storybook/addons';
import { Wrapper } from './Wrapper';

export const withMuiTheme = makeDecorator({
  name: 'withMuiTheme',
  parameterName: 'theme',
  wrapper: Wrapper,
});

import { makeDecorator } from '@storybook/addons';
import { Wrapper } from './Wrapper';

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  wrapper: Wrapper,
});

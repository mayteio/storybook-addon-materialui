# `@harelpls/storybook-addon-materialui`

A simple [storybook](https://storybook.js.org) addon that provides a decorator to wrap your stories in the theme provider. [`storybook-addon-material-ui`](https://github.com/react-theming/storybook-addon-material-ui) provided too many options for me and lacked the `<CssBaseline />` injection.

![@harelpls/storybook-addon-materialui demo](https://i.imgur.com/ROQQvQP.gif)

## Installation

0. [Setup storybook](https://storybook.js.org/docs/guides/quick-start-guide/)
1. `yarn add --dev @harelpls/storybook-addon-materialui`
1. register the addon `in main.js`:

```javascript
module.exports = {
  stories: [...],
  addons: ['@harelpls/storybook-addon-materialui']
}
```

3. add the decorator:

```javascript
import React from 'react';

import { addDecorator } from '@storybook/react';
import { withMuiTheme } from "@harelpls/storybook-addon-materialui";

import {lightTheme, darkTheme} from './theme';
import MyComponent from './MyComponent';

// globally with custom themes
addDecorator(withMuiTheme({
  "Custom light theme": lightTheme,
  "Custom dark theme": darkTheme
}))

// via CFS with default themes
export default = {
  title: "My/Component",
  decorators: [withMuiTheme()]
}

// for individual story with default themes
export const MyStory = () => <MyComponent />;
MyStory.story = {
  decorators: [withMuiTheme()]
}
```

## Options

The only options are the themes you wish to inject. The `withMuiTheme` decorator takes an object that describes your custom themes. The key is the name and label for the select element. The value is the theme itself.

```javascript
withMuiTheme({
  'Select Option': myCustomTheme,
});
```

## Parameters

### Disable `ThemeProvider` wrapper for a single story

You can disable the wrapper (essentailly the whole addon) for particular stories by adding the `disable` parameter to `materialui`:

```js
// CFS export
export default {
  title: 'Disable parameter',
  parameters: {
    materialui: {
      disable: true,
    },
  },
};
```

### Disable [`<CssBaseline />`](https://material-ui.com/components/css-baseline/)

You may be using [`@storybook/addon-backgrounds`](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds) and not want the background controlled by this addon. Simply pass the cssbaseline: false parameter to prevent the [`<CssBaseline />`](https://material-ui.com/components/css-baseline/) component from being injected.

```js
// CFS export
export default {
  title: 'Disable parameter',
  parameters: {
    materialui: {
      cssbaseline: false,
    },
  },
};
```

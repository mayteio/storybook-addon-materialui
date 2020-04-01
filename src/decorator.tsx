import React from 'react';
import { makeDecorator, useParameter } from '@storybook/addons';
import {
  CHANGE_THEME,
  OPTIONS_INIT,
  DEFAULT_LIGHT_THEME,
  DEFAULT_DARK_THEME,
  PARAM_KEY,
} from './constants';
import {
  useChannel as useClientChannel,
  useState,
  useEffect,
} from '@storybook/client-api';
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';

const defaultThemes = {
  [DEFAULT_LIGHT_THEME]: createMuiTheme({ palette: { type: 'light' } }),
  [DEFAULT_DARK_THEME]: createMuiTheme({ palette: { type: 'dark' } }),
};

export const withMuiTheme = makeDecorator({
  name: 'withMuiTheme',
  parameterName: 'theme',
  wrapper: (storyFn, context, { options }) => {
    const [theme, setTheme] = useState(undefined);
    const emit = useClientChannel({
      [CHANGE_THEME]: setTheme,
    });

    useEffect(() => {
      emit(OPTIONS_INIT, options);
    }, [options]);

    const themeSet: Record<string, any> = options ? options : defaultThemes;

    let activeTheme: any = themeSet[Object.keys(themeSet)[0]];
    if (theme !== undefined) {
      activeTheme =
        // @ts-ignore
        theme in themeSet
          ? themeSet[theme || '']
          : themeSet[Object.keys(themeSet)[0]];
    }

    // parameter
    const parameters = useParameter(PARAM_KEY, { disable: false });

    return parameters?.disable ? (
      storyFn(context)
    ) : (
      <MuiThemeProvider theme={activeTheme}>
        <CssBaseline />
        {storyFn(context)}
      </MuiThemeProvider>
    );
  },
});

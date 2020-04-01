import React from 'react';
import { Theme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { useParameter, StoryWrapper } from '@storybook/addons';
import {
  useChannel as useClientChannel,
  useState,
  useEffect,
} from '@storybook/client-api';
import {
  CHANGE_THEME,
  OPTIONS_INIT,
  PARAM_KEY,
  PARAMETER_DEFAULTS,
} from './constants';
import { defaultThemes } from './themes';

export const Wrapper: StoryWrapper = (storyFn, context, { options }) => {
  const [theme, setTheme] = useState(undefined);
  const emit = useClientChannel({
    [CHANGE_THEME]: setTheme,
  });

  useEffect(() => {
    emit(OPTIONS_INIT, options);
  }, [options, emit]);

  const themeSet: Record<string, Theme> = options ? options : defaultThemes;

  let activeTheme: Theme = themeSet[Object.keys(themeSet)[0]];
  if (theme !== undefined) {
    activeTheme =
      // @ts-ignore
      theme in themeSet
        ? themeSet[theme || '']
        : themeSet[Object.keys(themeSet)[0]];
  }

  // parameter
  const parameters = useParameter(PARAM_KEY, PARAMETER_DEFAULTS);

  return parameters?.disable ? (
    storyFn(context)
  ) : (
    <MuiThemeProvider theme={activeTheme}>
      {parameters?.cssbaseline && <CssBaseline />}
      {storyFn(context)}
    </MuiThemeProvider>
  );
};

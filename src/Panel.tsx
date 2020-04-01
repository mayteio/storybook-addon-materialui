import React, { useEffect, Fragment } from 'react';
import { Form } from '@storybook/components';
import { useAddonState, useChannel, useParameter } from '@storybook/api';
import { STORY_CHANGED } from '@storybook/core-events';
import {
  OPTIONS_INIT,
  CHANGE_THEME,
  DEFAULT_LIGHT_THEME,
  DEFAULT_DARK_THEME,
  PARAM_KEY,
} from './constants';

export const Panel = () => {
  const [options, setOptions] = useAddonState('material-ui/options');
  const [theme, setTheme] = useAddonState('material-ui/selectedTheme');

  const emit = useChannel({
    [OPTIONS_INIT]: setOptions,
    [STORY_CHANGED]: () => emit(CHANGE_THEME, theme),
  });

  useEffect(() => {
    emit(CHANGE_THEME, theme);
  }, [theme]);

  // parameter
  const { disable } = useParameter(PARAM_KEY, { disable: false });

  return (
    <div style={{ padding: 24 }}>
      <Form>
        <label>Select theme</label>
        <br />
        <Form.Select
          disabled={disable}
          value={theme as string}
          onChange={e => setTheme(e.target.value)}
        >
          {options && options !== '_undefined_' ? (
            Object.keys(options as any[]).map(key => (
              <option key={key} value={key}>
                {key}
              </option>
            ))
          ) : (
            <Fragment>
              <option value={DEFAULT_LIGHT_THEME}>Light Theme</option>
              <option value={DEFAULT_DARK_THEME}>Dark Theme</option>
            </Fragment>
          )}
        </Form.Select>
      </Form>
    </div>
  );
};

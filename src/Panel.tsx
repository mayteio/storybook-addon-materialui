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
  PARAMETER_DEFAULTS,
} from './constants';

export const Panel = () => {
  const [options, setOptions] = useAddonState('material-ui/options');
  const [theme, setTheme] = useAddonState('material-ui/selectedTheme');
  // const [cssBaseline, setCssBaseline] = useAddonState(
  //   'material-ui/cssBaseline'
  // );

  const emit = useChannel({
    [OPTIONS_INIT]: setOptions,
    [STORY_CHANGED]: () => emit(CHANGE_THEME, theme),
  });

  useEffect(() => {
    emit(CHANGE_THEME, theme);
  }, [theme, emit]);

  // parameter
  const { disable } = useParameter(PARAM_KEY, PARAMETER_DEFAULTS);

  return (
    <div style={{ padding: 24 }}>
      <Form>
        <Form.Field label="Select Theme">
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
        </Form.Field>
      </Form>
    </div>
  );
};

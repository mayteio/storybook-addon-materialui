import { createMuiTheme } from '@material-ui/core/styles';
import { DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME } from './constants';

export const darkPinkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#e50e56' },
  },
});

export const lightGreenTheme = createMuiTheme({
  palette: {
    primary: { main: '#008850' },
  },
});

export const lightBlueTheme = createMuiTheme({
  palette: {
    primary: { main: '#277BB4' },
  },
});

export const defaultThemes = {
  [DEFAULT_LIGHT_THEME]: createMuiTheme({ palette: { type: 'light' } }),
  [DEFAULT_DARK_THEME]: createMuiTheme({ palette: { type: 'dark' } }),
};

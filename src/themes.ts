import { createTheme } from '@material-ui/core/styles';
import { DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME } from './constants';

export const darkPinkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50e56' },
  },
});

export const lightGreenTheme = createTheme({
  palette: {
    primary: { main: '#008850' },
  },
});

export const lightBlueTheme = createTheme({
  palette: {
    primary: { main: '#277BB4' },
  },
});

export const defaultThemes = {
  [DEFAULT_LIGHT_THEME]: createTheme({ palette: { mode: 'light' } }),
  [DEFAULT_DARK_THEME]: createTheme({ palette: { mode: 'dark' } }),
};

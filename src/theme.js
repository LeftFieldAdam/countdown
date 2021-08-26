import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;

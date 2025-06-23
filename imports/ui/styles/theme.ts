import { createTheme } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import { THEME } from '../../constants/theme.const';

const theme = createTheme({
  spacing: THEME.SPACING.SMALL,
  palette: {
    primary: { main: green[700] },
    background: {
      default: grey[100],
      paper: THEME.COLORS.WHITE,
    },
  },
  shape: { borderRadius: THEME.BORDER_RADII.SMALL },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: THEME.BORDER_RADII.SMALL } } },
    MuiButton: {
      defaultProps: { size: 'small', disableElevation: true },
      styleOverrides: {
        root: {
          minWidth: THEME.WIDTH.MEDIUM,
          textTransform: 'none',
          fontWeight: THEME.FONT_WEIGHT.SEMI_BOLD,
        },
      },
    },
  },
});

export default theme;

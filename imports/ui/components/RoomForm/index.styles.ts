import { SxProps, Theme } from '@mui/material/styles';
import { THEME } from '../../../constants/theme.const';

export const createBtnSx: SxProps<Theme> = {
  px: THEME.PX.LARGE,
  bgcolor: 'primary.main',
  '&:hover': { bgcolor: 'primary.dark' },
};

export const stackSx: SxProps<Theme> = {
  marginBottom: THEME.MARGIN.SMALL,
};

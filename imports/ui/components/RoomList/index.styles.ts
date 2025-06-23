import { SxProps, Theme } from '@mui/material/styles';
import { THEME } from '../../../constants/theme.const';

export const listPaperSx: SxProps<Theme> = {
  p: THEME.PX.MEDIUM,
  bgcolor: 'grey.100',
};

export const listSx: SxProps<Theme> = {
  maxHeight: THEME.HEIGHT.MEDIUM,
  overflowY: 'auto',
};

export const dividerSx: SxProps<Theme> = {
  my: THEME.PX.SMALL,
};

import { SxProps, Theme } from '@mui/material/styles';
import { THEME } from '../constants/theme.const';

export const pageWrapperSx: SxProps<Theme> = {
  minHeight: THEME.HEIGHT.LARGE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const contentRowSx: SxProps<Theme> = {
  display: 'flex',
  gap: THEME.GAP.SMALL,
};

export const contentSx: SxProps<Theme> = {
  flexShrink: THEME.FLEX.ZERO,
  width: THEME.WIDTH.LARGE,
};

export const progress: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
};

export const paper: SxProps<Theme> = {
  p: THEME.PX.MEDIUM,
};

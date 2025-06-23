import { SxProps, Theme } from '@mui/material/styles';

export const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 24px)',
  gridTemplateRows: 'repeat(10, 24px)',
};

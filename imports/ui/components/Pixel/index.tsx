import React, { memo } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { THEME } from '../../../constants/theme.const';

interface IPixelProps {
  black: boolean;
  onClick(): void;
  sx?: SxProps<Theme>;
}

const Pixel: React.FC<IPixelProps> = ({ black, onClick, sx }) => (
  <Box
    onClick={onClick}
    sx={{
      width: THEME.WIDTH.SMALL,
      height: THEME.HEIGHT.SMALL,
      bgcolor: black ? 'common.black' : 'common.white',
      border: `${THEME.PX.SMALL}px solid ${THEME.COLORS.GREY}`,
      cursor: 'pointer',
      ...sx,
    }}
  />
);

export default memo(Pixel);

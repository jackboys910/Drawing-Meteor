import React, { memo, useCallback } from 'react';
import { Box } from '@mui/material';
import { Meteor } from 'meteor/meteor';
import { Room } from '../../../api/rooms/rooms';
import Pixel from '../Pixel/index';
import { gridSx } from './index.styles';

interface IPixelGridProps {
  room: Room;
}

const PixelGrid: React.FC<IPixelGridProps> = ({ room }) => {
  const handleToggle = useCallback(
    (r: number, c: number) => Meteor.call('rooms.toggleCell', room._id, r, c),
    [room._id],
  );

  return (
    <Box sx={gridSx}>
      {room.grid.map((row, ri) =>
        row.map((cell, ci) => (
          <Pixel key={`${ri}-${ci}`} black={!!cell} onClick={() => handleToggle(ri, ci)} />
        )),
      )}
    </Box>
  );
};

export default memo(PixelGrid);

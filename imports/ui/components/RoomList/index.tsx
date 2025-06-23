import React, { memo } from 'react';
import { Paper, Divider, List } from '@mui/material';

import RoomForm from '../RoomForm/index';
import RoomItem from '../RoomItem/index';
import { Room } from '../../../api/rooms/rooms';
import { listPaperSx, listSx, dividerSx } from './index.styles';

interface IRoomListProps {
  rooms: Room[];
  selected?: string;
  onSelect(id: string): void;
}

const RoomList: React.FC<IRoomListProps> = ({ rooms, selected, onSelect }) => (
  <Paper elevation={3} sx={listPaperSx}>
    <RoomForm />
    <Divider sx={dividerSx} />
    <List dense sx={listSx}>
      {rooms.map((r) => (
        <RoomItem
          key={r._id}
          id={r._id!}
          name={r.name}
          selected={r._id === selected}
          onSelect={onSelect}
        />
      ))}
    </List>
  </Paper>
);

export default memo(RoomList);

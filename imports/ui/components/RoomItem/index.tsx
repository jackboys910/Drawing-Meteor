import React, { memo, useCallback } from 'react';
import { ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Meteor } from 'meteor/meteor';

interface IRoomItemProps {
  id: string;
  name: string;
  selected: boolean;
  onSelect(id: string): void;
}

const RoomItem: React.FC<IRoomItemProps> = ({ id, name, selected, onSelect }) => {
  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      Meteor.call('rooms.remove', id);
    },
    [id],
  );

  const handleSelect = useCallback(() => onSelect(id), [id, onSelect]);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" size="small" onClick={handleRemove}>
          <DeleteIcon color="warning" fontSize="small" />
        </IconButton>
      }
    >
      <ListItemButton selected={selected} onClick={handleSelect}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(RoomItem);

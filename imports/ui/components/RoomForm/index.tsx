import React, { useCallback, useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Meteor } from 'meteor/meteor';
import { createBtnSx, stackSx } from './index.styles';

const RoomForm: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;
    Meteor.call('rooms.insert', name.trim());
    setName('');
  }, [name]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  return (
    <Stack direction="row" spacing={1} sx={stackSx}>
      <TextField
        variant="standard"
        label="Название комнаты"
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" color="success" onClick={handleSubmit} sx={createBtnSx}>
        Создать
      </Button>
    </Stack>
  );
};

export default RoomForm;

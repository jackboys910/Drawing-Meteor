import React, { useState, useMemo } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Box, Paper, CircularProgress, Container } from '@mui/material';

import { Rooms } from '../api/rooms/rooms';
import RoomList from './components/RoomList/index';
import PixelGrid from './components/PixelGrid/index';
import { pageWrapperSx, contentRowSx, contentSx, progress, paper } from './App.styles';

const App: React.FC = () => {
  const { rooms, ready } = useTracker(() => {
    const sub = Meteor.subscribe('rooms');
    return {
      ready: sub.ready(),
      rooms: Rooms.find({}, { sort: { createdAt: 1 } }).fetch(),
    };
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const current = useMemo(
    () => rooms.find((r) => r._id === selectedId) ?? rooms[0],
    [rooms, selectedId],
  );

  if (!ready) {
    return (
      <Box sx={progress} mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth={false} sx={pageWrapperSx}>
      <Box sx={contentRowSx}>
        <Box sx={contentSx}>
          <RoomList rooms={rooms} selected={current?._id} onSelect={setSelectedId} />
        </Box>

        {current && (
          <Paper elevation={3} sx={paper}>
            <PixelGrid room={current} />
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default App;

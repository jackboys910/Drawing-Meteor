import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from '../imports/ui/App';
import theme from '../imports/ui/styles/theme';

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target')!);
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  );
});

import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => {
  return (
    <MuiThemeProvider>
      <AppBar />
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default App;

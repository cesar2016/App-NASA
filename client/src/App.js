import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
// import NewClient from './components/CRUD/client';
import Nav from './components/Nav' 
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#00e676',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}  >
      <div className="App">     
        
          <Route 
          path='/'
          component={Nav}
          />
          
      </div>
    </ThemeProvider>
  );
}

export default connect(null, null)(App);

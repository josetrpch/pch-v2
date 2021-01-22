import React from 'react';

import Menu from './components/Menu';
import  theme  from './themeConfig';
import {ThemeProvider} from '@material-ui/core/styles';




function App() {

  return (
    

      <ThemeProvider theme={theme} >
      <Menu/>
      </ThemeProvider>
  
  );
}

export default App;

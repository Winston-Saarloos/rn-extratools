// Components
 //import React from "react";
 import {Route, BrowserRouter as Router} from 'react-router-dom';
 import { ThemeProvider } from "@material-ui/core/styles";
 import CssBaseline from '@material-ui/core/CssBaseline';
 import deepPurple from '@material-ui/core/colors/deepPurple';
 import {createTheme} from '@material-ui/core/styles';
 import './App.css';

// Pages
//import Header from './Pages/Header';
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowserMain';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    type: string;
  }
  interface PaletteOptions {
    type: string;
  }
}

// Styling
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
  },
});

function App() {
  return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/imagebrowser" component={ImageBrowser} />
        </Router>
      </div>
     </ThemeProvider>
  );
}

export default App;

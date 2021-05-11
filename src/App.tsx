// Components
// import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import deepPurple from '@material-ui/core/colors/deepPurple';

// Pages
//import Header from './Pages/Header';
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowserMain';

// Styling
import './App.css';

// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: deepPurple,
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={}>
      // <CssBaseline />
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/imagebrowser" component={ImageBrowser} />
        </Router>
      </div>
    // </ThemeProvider>
  );
}

export default App;

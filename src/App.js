// Components
import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Pages
//import Header from './Pages/Header';
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowserMain';

// Styling
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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

// Components
import React, { useState } from "react";
import { Switch, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {Route, BrowserRouter as Router} from 'react-router-dom';

// Pages
import Header from './Pages/Header';
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowser';

// Styling
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <div className="App">
          <Header />
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/imagebrowser" component={ImageBrowser} />
          </Router>
        </div>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

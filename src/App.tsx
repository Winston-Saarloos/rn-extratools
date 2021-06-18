// Components
 import {Route, BrowserRouter as Router} from 'react-router-dom';
 import { ThemeProvider } from "@material-ui/core/styles";
 import CssBaseline from '@material-ui/core/CssBaseline';
 import {createTheme} from '@material-ui/core/styles';
 import './App.css';

// Pages
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowserMain';
import ChangeLog from './Pages/ChangeLog';
import { grey, deepPurple } from '@material-ui/core/colors';
import { useMediaQuery } from '@material-ui/core';

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
    secondary: grey,
}});

function App() { 
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  console.log(`User prefers dark mode: ${prefersDarkMode}`);

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: prefersDarkMode ? 'dark' : 'light'
  //       },
  //     }),
  //   [prefersDarkMode],
  // );

  return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/imagebrowser" component={ImageBrowser} />
          <Route path="/changelog" component={ChangeLog} />
        </Router>
      </div>
     </ThemeProvider>
  );
}

export default App;

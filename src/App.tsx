// Components
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Pages
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowserMain';
import ChangeLog from './Pages/ChangeLog';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import { deepPurple } from '@material-ui/core/colors';
import { useMediaQuery } from '@material-ui/core';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ManageUsers from './Pages/League/Private/ManageUsers';

import firebase from './Pages/Auth/Firebase';
import { getUserById, setLoading, setNeedVerification } from './Store/Actions/authActions';
import { RootState } from './Store';

// Styling
// const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: deepPurple,
//     secondary: grey,
// }});

function App() { 
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: deepPurple
        },
      }),
    [prefersDarkMode],
  );

  console.log("User prefers dark: " + prefersDarkMode);
  console.log(theme);

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));

        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };

  }, [dispatch]);

  // Create a page spinner
  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/imagebrowser" component={ImageBrowser} exact />
            <Route path="/changelog" component={ChangeLog} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/forgotpassword" component={ForgotPassword} exact />
            <Route path="/manageusers" component={ManageUsers} exact />
          </Switch>
        </BrowserRouter>
      </div>
     </ThemeProvider>
  );
}

export default App;

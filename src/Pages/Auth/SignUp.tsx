import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import "firebase/auth";
import "firebase/firestore";

import { useDispatch, useSelector } from 'react-redux';
import { signup, setError } from '../../Store/Actions/authActions';
import { RootState } from '../../Store/';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
})

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState<string>(''); // "First Name"
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { error, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const changeEmail = (event: React.ChangeEvent<{ value: string }>) => {
    return setEmail(event.target.value as string);
  };

  const changeUsername = (event: React.ChangeEvent<{ value: string }>) => {
    return setUsername(event.target.value as string);
  };

  const changePassword = (event: React.ChangeEvent<{ value: string }>) => {
    return setPassword(event.target.value as string);
  };

  const changePasswordConfirm = (event: React.ChangeEvent<{ value: string }>) => {
    return setPasswordConfirm(event.target.value as string);
  };

  const handleSubmit = () => {
    console.log("Running sign up...");
    setLoading(true);

    if (password !== passwordConfirm) {
      setLoading(false);
      return setError("Passwords do not match")
    }

    var firstName = username;

    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  }

  // redirect user if they are signed in (user != null)
  if (user) {
    console.log("User already signed in... redirecting..");
    history.push("/");
  }

  return (
        <Grid container direction="row" spacing={2}>
          <Grid item xs={1} md={2} lg={3} xl={4}>
            {/* Empty Column For Spacing */}
          </Grid>
          <Grid item xs={10} md={8} lg={6} xl={4}>
            <Box display="flex" justifyContent="center" p={1} >
              <Card className={classes.root}>
                <CardHeader title="RN-ExtraTools" subheader={'Sign Up'} />
                <CardContent>
                  <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      {error && <p>{error}</p>}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="username" label="Username" autoComplete="off" variant="standard" value={username} onChange={changeUsername} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="email" label="Email" autoComplete="off" variant="standard" value={email} onChange={changeEmail} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="password" label="Password" autoComplete="off" type="password" variant="standard" value={password} onChange={changePassword} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="passwordConfirmation" label="Confirm Password" type="password" autoComplete="off" variant="standard" value={passwordConfirm} onChange={changePasswordConfirm} />
                    </Grid>
                  </Grid>
                  <Box>
                    Already have an account? <Link to="/signin">Sign In</Link>
                  </Box>
                  <Button variant="contained" disabled={loading} onClick={() => handleSubmit()} color="primary">{loading ? "Loading..." : "Sign Up"}</Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={1} md={2} lg={3} xl={4}>
            {/* Empty Column For Spacing */}
          </Grid>
        </Grid>
  )
}
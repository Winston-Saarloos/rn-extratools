import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useHistory } from "react-router-dom"
//import { AuthContext } from './AuthContext';
import "firebase/auth";
import "firebase/firestore";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory()
  //const authContext = useContext(AuthContext);

  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');

  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const changeUsername = (event: React.ChangeEvent<{ value: string }>) => {
    return setUsername(event.target.value as string);
  };

  const changePassword = (event: React.ChangeEvent<{ value: string }>) => {
    return setPassword(event.target.value as string);
  };

  const changePasswordConfirm = (event: React.ChangeEvent<{ value: string }>) => {
    return setPasswordConfirm(event.target.value as string);
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      //await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
        <Grid container direction="row" spacing={2}>
          <Grid item xs={1} md={2} lg={3} xl={4}>
            {/* Empty Column For Spacing */}
          </Grid>
          <Grid item xs={10} md={8} lg={6} xl={4}>
            <Box display="flex" justifyContent="center" p={1} >
              <Card className={classes.root}>
                <CardHeader title="RN-ExtraTools" subheader={error} />
                <CardContent>
                  <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="email" label="Email" autoComplete="off" variant="standard" value={username} onChange={changeUsername} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="password" label="Password" autoComplete="off" type="password" variant="standard" value={password} onChange={changePassword} />
                    </Grid>
                  </Grid>
                  <TextField required id="passwordConfirmation" label="Confirm Password" type="password" autoComplete="off" variant="standard" value={passwordConfirm} onChange={changePasswordConfirm} />
                  <Button variant="contained" disabled={loading} onClick={() => handleSubmit} color="primary">Sign Up</Button>
                  <Box>
                    Already have an account? Login
                  </Box>
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
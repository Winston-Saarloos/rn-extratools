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
import { sendPasswordResetEmail, setError, setSuccess } from '../../Store/Actions/authActions';
import { RootState } from '../../Store/';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
})

export default function ForgotPassword() {
  const classes = useStyles();
  //const authContext = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }

      if(success) {
        dispatch(setSuccess(''));
      }
    }
  }, [error, dispatch, success]);

  const changeEmail = (event: React.ChangeEvent<{ value: string }>) => {
    return setEmail(event.target.value as string);
  };

  const handleSubmit = async () => {
    //event?.preventDefault();

    setLoading(true);
    console.log("Sending password reset email..");
    await dispatch(sendPasswordResetEmail(email, "Email sent!"));
    setLoading(false);
  }

  return (
        <Grid container direction="row" spacing={2}>
          <Grid item xs={1} md={2} lg={3} xl={4}>
            {/* Empty Column For Spacing */}
          </Grid>
          <Grid item xs={10} md={8} lg={6} xl={4}>
            <Box display="flex" justifyContent="center" p={1} >
              <Card className={classes.root}>
                <CardHeader title="RN-ExtraTools" subheader={'Forgot Password'} />
                <CardContent>
                  <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      {error && <p>{error}</p>}
                      {success && <p>{success}</p>}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <TextField required id="email" label="Email" autoComplete="off" variant="standard" value={email} onChange={changeEmail} />
                    </Grid>
                  </Grid>
                  <Button variant="contained" disabled={loading} onClick={() => handleSubmit()} color="primary">{loading ? "Loading..." : "Send Password Reset Email"}</Button>
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
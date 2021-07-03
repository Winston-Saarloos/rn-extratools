import { AppBar, Toolbar, Typography } from "@material-ui/core";
//import { useAuth0, User } from '@auth0/auth0-react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
import SiteMenu from '../Pages/SiteMenu';

const useStyles = makeStyles({
  centerHorzAndVert: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

interface IProps {
  title: string
}

export default function Header({ title }: IProps) {
  const classes = useStyles();
  //const { loginWithRedirect, logout, user, isLoading } = useAuth0<User>();

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Grid container spacing={0} direction="row">
            <Grid item xs={2} md={2} lg={1} xl={1} className={clsx(classes.centerHorzAndVert)}>
              <SiteMenu />
            </Grid>
            <Grid item xs={5} md={3} lg={2} xl={1} className={clsx(classes.centerHorzAndVert)}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={1} md={5} lg={7} xl={8}></Grid>
            <Grid item xs={2} md={1} lg={1} xl={1} className={clsx(classes.centerHorzAndVert)}>
              {/* { user && (
                <Avatar alt={user.address} src={user.picture} />
              )} */}
            </Grid>
            <Grid item xs={2} md={1} lg={1} xl={1} className={clsx(classes.centerHorzAndVert)}>
              {/* { !user && (
                <Button variant="contained" onClick={() => loginWithRedirect()} disabled>Login</Button>
              )}
              { user && (
                <Button variant="contained" onClick={() => logout()}>Logout</Button>
              )} */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}


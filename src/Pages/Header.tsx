import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useAuth0, User } from '@auth0/auth0-react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

interface IProps {
  title: string
}

export default function Header({ title }: IProps) {

  const {loginWithRedirect, logout, user, isLoading} = useAuth0<User>();

  const Logo = (
    <Typography variant="h6" component="h1">
      {title}
    </Typography>
  );

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Grid container spacing={0} direction="row">
            <Grid item xs={5} md={3} lg={2} xl={1}>
              {Logo}
            </Grid>
            <Grid item xs={3} md={7} lg={8} xl={9}></Grid>
            <Grid item xs={2} md={1} lg={1} xl={1}>
              <Box display="flex" justifyContent="flex-end">
                {!isLoading && user && (
                  <Avatar alt={user.address} src={user.picture} />
                )}
              </Box>
            </Grid>
            <Grid item xs={2} md={1} lg={1} xl={1}>
              <Box display="flex" justifyContent="center" alignItems="center">
                {!isLoading && !user && (
                  <Button variant="contained" onClick={() => loginWithRedirect()} disabled>Login</Button>
                )}
                {!isLoading && user && (
                  <Button variant="contained" onClick={() => logout()}>Logout</Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}


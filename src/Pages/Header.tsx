import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SiteMenu from '../Pages/SiteMenu';

// Video Imports
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store';
import { signout } from '../Store/Actions/authActions';


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
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

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
              {!authenticated ? 
              <div>
                {/* <Button variant="contained" onClick={() => history.push('/signup')} >Sign Up</Button> */}
                <Button disabled variant="contained" onClick={() => history.push('/signin')} >Login</Button>
              </div>
              :  
              <Button variant="contained" onClick={logoutClickHandler} >Logout</Button>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}


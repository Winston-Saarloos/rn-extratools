import Header from './Header';
import AppSelection from './AppSelection';
import Grid from '@material-ui/core/Grid';

function Home() {

  return (
    <div style={{ marginTop: 80 }} className="Home">
      <Grid container direction="column" alignItems="stretch">
        <Header title={'Home'} />
        <Grid item xs={12}>
          <AppSelection />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
import Header from './Header';
import ChangeLog from './ChangeLog';
import Grid from '@material-ui/core/Grid';

function Home() {

  return (
    <div style={{ marginTop: 80 }} className="Home">
      <Grid container direction="column" alignItems="stretch">
        <Header title={'Home'} />
        <Grid item xs={12}>
          <ChangeLog />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
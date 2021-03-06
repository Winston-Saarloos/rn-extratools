import React from 'react'
import Header from './Header';
import ChangeLog from './ChangeLog';
import Grid from '@material-ui/core/Grid';
//import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';

function Home() {

  return (
    <div style={{ marginTop: 80 }} className="Home">
      <Grid container direction="column" justify="flex-start" alignItems="stretch">
        <Header title={'Home'} />
        <Grid item xs={12}>
          <ChangeLog />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
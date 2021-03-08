import React from 'react'
import Header from './../Header';
//import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';

// Component imports
import GridView from './GridView';

function ImageBrowserMain() {

  return (
    <div style={{ marginTop: 60 }} className="ImageBrowserMain">
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3} style={{ background: "grey" }}>
        <Grid item>
          <Header title={'RR Image Browser'} />
        </Grid>
        <Grid item>
          [Filter Component]
        </Grid>
        <Grid item xs={12}>
          <GridView />
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
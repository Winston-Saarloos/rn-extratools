import React from 'react'
import Header from './../Header';
import ImageBrowserHeader from './ImageBrowserHeader';
//import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';

// Component imports
import GridView from './GridView';

function ImageBrowserMain() {

  return (
    <div style={{ marginTop: 80 }} className="ImageBrowserMain">
      <Grid container direction="column">
        <Grid item>
          <Header title={'RR Image Browser'} />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" xs={12} alignItems="flex-start" spacing={3}>
            <Grid item xs={12}>
              <ImageBrowserHeader />
            </Grid>
            <Grid item>
              <GridView />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
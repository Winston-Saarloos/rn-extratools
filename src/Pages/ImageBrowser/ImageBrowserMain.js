import React from 'react'
import Header from './../Header';
import Divider from '@material-ui/core/Divider';

//import Paper from '@material-ui/core/Paper';


//import { useState } from 'react'
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';

// Component imports
import GridView from './GridView';
import ImageBrowserHeader from './ImageBrowserHeader';

function ImageBrowserMain() {
  return (
    <div style={{ marginTop: 70 }} className="ImageBrowserMain">
      <Header title={"RR Image Browser"} />
      <Grid container spacing={0} xs={12} direction="column">
        <Grid item xs={12}>
        <Grid container alignItems="flex-start" justify="center" spacing={1} xs={12} direction="row" >
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <ImageBrowserHeader />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Divider light />
        <Grid item xs={12}>
          <GridView />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
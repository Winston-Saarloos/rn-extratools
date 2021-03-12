import React from 'react'
import Header from './../Header';
import Paper from '@material-ui/core/Paper';


//import { useState } from 'react'
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Component imports
import GridView from './GridView';
import ImageBrowserHeader from './ImageBrowserHeader';

function ImageBrowserMain() {
  return (
    <div style={{ marginTop: 70 }} className="ImageBrowserMain">
      <Header title={"RR Image Browser"} />
      
      <Grid container direction="column" >
        <Grid item xs={12}>
          <Grid container spacing={1} direction="column" >
            <Grid item xs={12}>
              <ImageBrowserHeader />
            </Grid>
            <Grid item xs={12}>
              <GridView />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
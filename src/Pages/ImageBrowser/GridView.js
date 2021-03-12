import React from 'react'
//import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import { useState } from 'react';
//import axios from 'axios';

// Styling
import './GridView.css';


function GridView() {



  return (
    <div className="GridView">
      <GridList cols={12}>
        <GridListTile>
          <Paper>
            [Image Thumbnail Component]
          </Paper>
        </GridListTile>
        <GridListTile>
          <Paper>
            [Image Thumbnail Component]
          </Paper>
        </GridListTile>
        <GridListTile>
          <Paper>
            [Image Thumbnail Component]
          </Paper>
        </GridListTile>
      </GridList>
    </div>
  );
}

export default GridView;
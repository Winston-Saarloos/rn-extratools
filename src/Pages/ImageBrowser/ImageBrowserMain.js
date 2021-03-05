import React from 'react'
import Header from './../Header';
import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';

function ImageBrowserMain() {

  return (
    <div style={{marginTop: 60}} className="ImageBrowserMain">
      <Paper>
      <Header title={'RR Image Browser'}/>
      <h1>RR - Image Browser</h1>
      </Paper>
    </div>
  );
}

export default ImageBrowserMain;
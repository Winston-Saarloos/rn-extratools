import React from 'react'
import Header from './Header';
import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';

function Home() {

  return (
    <div style={{marginTop: 80}} className="Home">
      <Paper>
      <Header title={'Home'}/>
      <h1>Title Text</h1>
      </Paper>
    </div>
  );
}

export default Home;
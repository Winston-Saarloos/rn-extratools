import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';

function ChangeLog() {

    return (
        <div className="ChangeLog">
            <Grid container direction="row" style={{ border: "2px solid grey" }}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column" spacing={0} >
                        <Grid item>
                            <Paper>
                                <div id="Item-Title"><h1>Image Browser</h1></div>
                                <div id="Item-Body">
                                    <p>Use this application to view and search for photos avaiable on rec.net</p>
                                    <Link to="/imagebrowser">Image Browser</Link>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChangeLog;
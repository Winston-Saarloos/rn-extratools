import React from 'react'

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
                                <div id="Item-Title"><h1>Test</h1></div>
                                <div id="Item-Body"><p>This is some bogus text that is used to fill up some space.</p></div>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <div id="Item-Title"><h1>Test</h1></div>
                                <div id="Item-Body"><p>This is some bogus text that is used to fill up some space.</p></div>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <div id="Item-Title"><h1>Test</h1></div>
                                <div id="Item-Body"><p>This is some bogus text that is used to fill up some space.</p></div>
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
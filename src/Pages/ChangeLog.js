import React from 'react'

// Material UI
import Grid from '@material-ui/core/Grid';
//import { Paper } from "@material-ui/core";
//import { useState } from 'react';
//import axios from 'axios';

function ChangeLog() {

    return (
        <div className="ChangeLog">
            <Grid container direction="row" style={{ border: "2px solid grey" }}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction="column" justify="flex-start" style={{ background: "black", color: "white" }}>
                        <Grid item>
                            Test
                        </Grid>
                    </Grid>
                    <div style={{ background: "yellow" }}>Hooray something is here!</div>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChangeLog;
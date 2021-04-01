import React from 'react';
import Grid from '@material-ui/core/Grid';
//import PropTypes from 'prop-types';
// import { Paper } from "@material-ui/core";
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
//import { useState } from 'react';
//import axios from 'axios';

// Styling
import './GridView.css';
//import { Component } from 'react';

// interface IProps {
//     imageData: PropTypes.shape
// }

// { imageData }: IProps

function GridView() {
    return (
        <div className="GridView" style={{ overflow: 'hidden' }}>
            <Grid container spacing={1} direction="row">
                {/* {imageData.map((image: { ImageName: string; Id: string | undefined; }) =>
                    <Grid item xs={6} md={6} lg={3} xl={2}>
                        <img src={'https://img.rec.net/' + image.ImageName + '?width=500'} alt={image.Id} className="imageThumbnail" />
                    </Grid>
                )} */}
            </Grid>
        </div>
    );
}

export default GridView;
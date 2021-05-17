import Grid from '@material-ui/core/Grid';
//import React from 'react';
// import { Paper } from "@material-ui/core";
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
//import { useState } from 'react';
//import axios from 'axios';

// Styling
import './GridView.css';
//import { Component } from 'react';

type GridViewProps = {
    imageData: GridImageItem[],
}

type GridImageItem = {
    Id: number,
    Type: number,
    Accessibility: number,
    AccessibilityLocked: boolean,
    ImageName: string,
    Description?: string | null,
    PlayerId: number,
    TaggedPlayerIds?: Array<number>,
    RoomId: number,
    PlayerEventId?: number | null,
    CreatedAt: string,
    CheerCount: number,
    CommentCount: number
}

function GridView({ imageData }: GridViewProps) {
    if (typeof imageData === 'undefined' || null) {
        imageData = [];
      }
    console.log(`Rendering Grid ${imageData.length}`);
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                <Grid container spacing={1} direction="row">
                    {
                        imageData.map((image: GridImageItem) => 
                            <Grid item xs={6} md={6} lg={3} xl={2}>
                                <img src={'https://img.rec.net/' + image.ImageName + '?width=500'} key={(image.Id).toString()} alt={(image.Id).toString()} className="imageThumbnail" />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        );
}

export default GridView;

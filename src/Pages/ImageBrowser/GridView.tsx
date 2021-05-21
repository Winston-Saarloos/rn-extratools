import Grid from '@material-ui/core/Grid';
//import { useInView } from 'react-intersection-observer';
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
    TaggedPlayerIds: Array<number>,
    RoomId: number,
    PlayerEventId?: number | null,
    CreatedAt: string,
    CheerCount: number,
    CommentCount: number
}

function GridView({ imageData }: GridViewProps) {
    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //   });

    console.log(`Image Data:`);
    console.log(imageData);
    console.log(imageData.length);

    if (typeof imageData == 'string' || imageData.length < 1) {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                    No Image Results! {imageData}
            </div>
        )
    } else {
        return (
            <div className="GridView" style={{ overflow: 'hidden' }}>
                <Grid container spacing={1} direction="row">
                    {imageData.map((image: GridImageItem) =>
                        <Grid item xs={6} md={6} lg={3} xl={2} key={image.Id.toString()} >
                            <img src={'https://img.rec.net/' + image.ImageName + '?width=500'} alt={image.Id.toString()} className="imageThumbnail" />
                        </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}

export default GridView;

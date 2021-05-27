import React from 'react'
//import Request from 'react-axios';
import Header from '../Header';
import Divider from '@material-ui/core/Divider';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
//import Paper from '@material-ui/core/Paper';
//import { useState } from 'react'
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
//import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';

// Component imports
import GridView from './GridView';
import ImageBrowserHeader from './ImageBrowserHeader';

// var imageObjectArray : {
//   Id: number,
//   Type: number,
//   Accessibility: number,
//   AccessibilityLocked: boolean,
//   ImageName: string,
//   Description?: string | null,
//   PlayerId: number,
//   TaggedPlayerIds: Array<number>,
//   RoomId: number,
//   PlayerEventId?: number | null,
//   CreatedAt: string,
//   CheerCount: number,
//   CommentCount: number
// }[] = [];

var imageRequestParameters : {
  Url: string,
  DisplayOrder: number,
  ImageLocation: number,
  SkipAmount: number,
  TakeAmount: number,
  Query?: string | null
}

function ImageBrowserMain() {
  const [imageRequestParams, setImageRequestParams] = React.useState<typeof imageRequestParameters>();

  async function LoadImages(imageLocation: number, displayOrder: number, searchQuery: string) {
    var takeAmount = 100000;
    var skipAmount = 0;
    var szUrl = 'https://rn-rest-api.herokuapp.com/images';

    if (imageLocation === 3) {
      takeAmount = 2000;
    }
    
    setImageRequestParams({
      "Url": szUrl,
      "DisplayOrder": displayOrder,
      "ImageLocation": imageLocation,
      "SkipAmount": skipAmount,
      "TakeAmount": takeAmount,
      "Query": searchQuery
    });
  }

  return (
    <div style={{ marginTop: 70 }} className="ImageBrowserMain">
      <Header title={"RR Image Browser"} />
      <Grid container style={{margin: 0, width: '100%',}} direction="column">
        <Grid item xs={12}>
          <Grid container alignItems="flex-start" spacing={0} direction="row">
          {/* <Grid container alignItems="flex-start" justify="center" spacing={0} direction="row" > */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <ImageBrowserHeader loadImages={LoadImages} />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Divider light />
          <Grid id="imageView" item xs={12}>
            <GridView requestParams={imageRequestParams} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
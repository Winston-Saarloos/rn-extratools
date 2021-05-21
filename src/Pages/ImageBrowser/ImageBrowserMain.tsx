import React from 'react'
//import Request from 'react-axios';
import Header from '../Header';
import Divider from '@material-ui/core/Divider';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
//import Paper from '@material-ui/core/Paper';
//import { useState } from 'react'
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';

// Component imports
import GridView from './GridView';
import ImageBrowserHeader from './ImageBrowserHeader';

var imageObjectArray : {
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
}[] = [];

function ImageBrowserMain() {
  const [imageDataObject, setImageDataObject] = React.useState<typeof imageObjectArray>([]);

  async function LoadImages(imageLocation: number, displayOrder: number, username: string) {
    //var gridView = (<GridView imageData={imageDataJson} />);
    var takeAmount = 75;
    var skipAmount = 0;
    var szUrl = '';

    if (imageLocation === 3) {
      szUrl = `https://rn-rest-api.herokuapp.com/images?sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`
    } else {
      szUrl = `https://rn-rest-api.herokuapp.com/images?u=${username}&sort=${displayOrder}&type=${imageLocation}&skip=${skipAmount}&take=${takeAmount}`;
    }

    console.log('Load Images fired!');
    console.log(szUrl);
    console.log(displayOrder);
    console.log(username);
    // URL https://rn-rest-api.herokuapp.com/images?u={username}
    if (username === '' && imageLocation !== 3) {
      setImageDataObject([]);
    } else {
  
      axios.get(szUrl)
        .then(async function (response) {
          // handle success
          //console.log(response);
          imageObjectArray = await response.data;

          if (imageObjectArray.length > 0) {
            setImageDataObject(imageObjectArray);
          } else {
            setImageDataObject([]);
          }    
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  
      //console.log(imageObjectArray);
    }
    // SET IMAGE JSON DATA TO STATE
    // gridView = (<GridView imageData={imageDataJson} />);
    //ReactDOM.render(gridView, document.getElementById('imageView'));
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
            <GridView imageData={imageDataObject} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserMain;
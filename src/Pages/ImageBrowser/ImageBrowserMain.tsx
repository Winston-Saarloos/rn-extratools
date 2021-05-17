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
//import ReactDOM from 'react-dom';
//import { ContactSupportOutlined } from '@material-ui/icons';

// function LoadImages(imageLocation: number, displayOrder: number, username: string) {
//   console.log('Load Images fired!');
//   console.log(imageLocation);
//   console.log(displayOrder);
//   console.log(username);
// }

// Test data
// var imageJson = [
//   {
//       "Id": 22257410,
//       "Type": 1,
//       "Accessibility": 1,
//       "AccessibilityLocked": false,
//       "ImageName": "36741ef1611e4f76bae5c256ac7b8ff2.jpg",
//       "Description": null,
//       "PlayerId": 1546112,
//       "TaggedPlayerIds": [
//           1546112
//       ],
//       "RoomId": 1112494,
//       "PlayerEventId": null,
//       "CreatedAt": "2020-04-30T04:57:06.6861763Z",
//       "CheerCount": 0,
//       "CommentCount": 0
//   },
//   {
//       "Id": 22257348,
//       "Type": 1,
//       "Accessibility": 1,
//       "AccessibilityLocked": false,
//       "ImageName": "97ee0abf51394c8999d8a898c5782300.jpg",
//       "Description": null,
//       "PlayerId": 1546112,
//       "TaggedPlayerIds": [
//           1546112,
//           1627513
//       ],
//       "RoomId": 1112494,
//       "PlayerEventId": null,
//       "CreatedAt": "2020-04-30T04:55:55.7957426Z",
//       "CheerCount": 0,
//       "CommentCount": 0
//   },
//   {
//       "Id": 22256780,
//       "Type": 1,
//       "Accessibility": 1,
//       "AccessibilityLocked": false,
//       "ImageName": "ba770b91852a4b41937a7aca9f01a79e.jpg",
//       "Description": null,
//       "PlayerId": 1546112,
//       "TaggedPlayerIds": [],
//       "RoomId": 1112494,
//       "PlayerEventId": null,
//       "CreatedAt": "2020-04-30T04:46:15.6244757Z",
//       "CheerCount": 0,
//       "CommentCount": 0
//   },
//   {
//       "Id": 22256768,
//       "Type": 1,
//       "Accessibility": 1,
//       "AccessibilityLocked": false,
//       "ImageName": "f1a022cd6fd74453b0440d54ca02f26a.jpg",
//       "Description": null,
//       "PlayerId": 1546112,
//       "TaggedPlayerIds": [],
//       "RoomId": 1112494,
//       "PlayerEventId": null,
//       "CreatedAt": "2020-04-30T04:46:01.2352577Z",
//     "CheerCount": 0,
//     "CommentCount": 0
//   },
//   {
//     "Id": 22254934,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "7657c9cce3f345a18c2031642bb01953.jpg",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 1112494,
//     "PlayerEventId": null,
//     "CreatedAt": "2020-04-30T04:16:18.6834154Z",
//     "CheerCount": 1,
//     "CommentCount": 0
// },
// {
//     "Id": 11137613,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "25cd5012f71f4202bca041083f7f2e55.jpg",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [
//         256147,
//         1546112
//     ],
//     "RoomId": 170135,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-12-07T08:22:41.7834511Z",
//     "CheerCount": 8,
//     "CommentCount": 1
// },
// {
//     "Id": 4794152,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "a582a57592194fdba1ce6146aa24cdd4",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 349228,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-05-13T05:13:36.5957418Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4794150,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "6c47d8aa2be244b6b1f2ff22c7bd19a7",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 349228,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-05-13T05:13:02.3778335Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4408816,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "24f7f3a5bb3346e484b3c16e49606e3a",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [
//         1546112
//     ],
//     "RoomId": 170135,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-18T20:40:48.8212649Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4400062,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "0a1142a61ccb4d1fa42f3de775621c69",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [
//         379678,
//         1546112
//     ],
//     "RoomId": 1104928,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-18T05:08:57.5172888Z",
//     "CheerCount": 8,
//     "CommentCount": 0
// },
// {
//     "Id": 4365607,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "4f9193f4378b4b56a33cc6681c2b067e",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 170136,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-16T01:12:13.4709087Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4365604,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "5bbe7b71a7de42a687b6370804241682",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 170136,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-16T01:12:07.2674806Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4365597,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "24185078aa804497840015e52ae58913",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [],
//     "RoomId": 170136,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-16T01:11:47.6556999Z",
//     "CheerCount": 2,
//     "CommentCount": 0
// },
// {
//     "Id": 4260244,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "9c6809fe66d1440f8ec353cdbcf502a4",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [
//         236977,
//         439469,
//         1546112
//     ],
//     "RoomId": 170130,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-10T02:20:47.7125259Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// },
// {
//     "Id": 4260132,
//     "Type": 1,
//     "Accessibility": 1,
//     "AccessibilityLocked": false,
//     "ImageName": "44594abca4ca4663acaee2a97f95f439",
//     "Description": null,
//     "PlayerId": 1546112,
//     "TaggedPlayerIds": [
//         1546112
//     ],
//     "RoomId": 170138,
//     "PlayerEventId": null,
//     "CreatedAt": "2019-04-10T02:07:46.2530937Z",
//     "CheerCount": 0,
//     "CommentCount": 0
// }];

var imageObjectArray : {
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
}[] = [];

function ImageBrowserMain() {
  const [imageDataObject, setImageDataObject] = React.useState<typeof imageObjectArray>([]);

  async function LoadImages(imageLocation: number, displayOrder: number, username: string) {
    //var gridView = (<GridView imageData={imageDataJson} />);
    var szUrl = `https://rn-rest-api.herokuapp.com/images?u=${username}`
    console.log('Load Images fired!');
    console.log(imageLocation);
    console.log(displayOrder);
    console.log(username);
    // URL https://rn-rest-api.herokuapp.com/images?u={username}
    if (username === '') {
      console.log('Clearing out the image grid..');
      imageObjectArray = [];
    } else {
      console.log('Sending Image Data to Image Grid..');
  
      axios.get(szUrl)
        .then(async function (response) {
          // handle success
          //console.log(response);
          imageObjectArray = await response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  
      console.log(imageObjectArray);
      setImageDataObject(imageObjectArray);
      console.log('State Value');
      console.log(imageDataObject);
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
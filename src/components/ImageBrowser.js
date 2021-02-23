import React from 'react'
import { useState } from 'react';
import ImageBrowserHeader from './ImageBrowserHeader';
import ImageBrowserMain from './ImageBrowserMain';
import axios from 'axios';

function ImageBrowser() {
  const [images, loadImages] = useState([
    { "Id": 58996903, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "2e5c45d80bca40d6b4873ecd4334d7a6.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [379678, 469152], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-20T02:14:59.9226077Z", "CheerCount": 0, "CommentCount": 0 },
    { "Id": 58764083, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "4731f177768d41b8a773147119cda9c4.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [256147, 469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T03:14:38.1088763Z", "CheerCount": 1, "CommentCount": 0 },
    { "Id": 58762516, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "dedd555ee8dd4a34992357d4f412c35c.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T03:06:39.8590331Z", "CheerCount": 0, "CommentCount": 0 },
    { "Id": 58753922, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "293662de8442475b942aa7b16a14b0df.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:27:09.214723Z", "CheerCount": 0, "CommentCount": 0 },
    { "Id": 58753881, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "9e70fb485ee5447ea86445b7643fc5f5.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:26:57.5954549Z", "CheerCount": 0, "CommentCount": 0 },
    { "Id": 58748964, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "2ec2ca3f35dd44aea336071c5fe781a2.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:05:13.0826248Z", "CheerCount": 0, "CommentCount": 0 }
  ]);

  // Updates the image grid
  async function updateImageGrid(username) {
    //var userId = await getUserId(username);
    //var imageLibrary = await getUserPublicPhotoLibrary(userId);

    fetch('https://accounts.rec.net/account?username=' + username)
      .then(response => response.json())
      .then(data => console.log(data));

    // axios.get('https://accounts.rec.net/account?username=' + username, {headers: {"strict-origin-when-cross-origin": "*"}})
    //   .then(res => {
    //     axios.get('https://api.rec.net/api/images/v4/player/' + res.data.accountId + '?skip=0&take=100000')
    //       .then(res1 => {
    //         const data2 = res1.data;
    //         loadImages(data2);
    //       })
    //   })
    // update image grid state with new data
    //loadImages(imageLibrary);
  }

  return (
    <div className="ImageBrowser">
      <ImageBrowserHeader onUpdate={updateImageGrid} />
      <ImageBrowserMain userId={0} images={images} />
    </div>
  );
}

export default ImageBrowser;


  // Function takes in a RecNet Display name and converts it to a RecNet user ID.
async function getUserId(recNetDisplayName) {
  var url = 'https://accounts.rec.net/account?username=' + recNetDisplayName;

  return new Promise(function (resolve, reject) {

    // https://accounts.rec.net/account?username=rocko
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log('Obtained User ID!');
        console.log(response);
        //return response.data.accountId;
        resolve(response.data.accountId);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        reject(error);
      })
      .then(function () {
        // always executed
      });
  });
}

// Function takes a userID and returns back a user's entire public photo library
async function getUserPublicPhotoLibrary(userId) { // User Photo Feed = 0, User Photo Library = 1, Global feed = 2
  //var dtToday = moment().format();
  //var urlUserPhotos = 'https://api.rec.net/api/images/v4/player/' + userId + '?skip=0&take=100000';
  var url = 'https://api.rec.net/api/images/v4/player/' + userId + '?skip=0&take=100000';
  //var urlUserFeed = 'https://api.rec.net/api/images/v3/feed/player/' + userId + '?skip=0&take=100000';
  //var urlGlobalFeed = 'https://api.rec.net/api/images/v3/feed/global?skip=45000&take=100000&since=' + dtToday;
  //var url = '';
  //var button = document.getElementById("btnFeedLibrary");

  // if (button.value == 0) {
  //     url = urlUserFeed;
  // } else if (button.value == 1) {
  //     url = urlUserPhotos;
  // } else if (button.value == 2) {
  //     url = urlGlobalFeed
  // }

  return new Promise(function (resolve, reject) {

    axios.get(url)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        reject(error);
      })
      .then(function () {
        // always executed
      });
  })
}
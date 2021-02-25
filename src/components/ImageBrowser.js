import React from 'react'
import { useState } from 'react';
import ImageBrowserHeader from './ImageBrowserHeader';
import ImageBrowserMain from './ImageBrowserMain';
//import axios from 'axios';

function ImageBrowser() {
  const [images, loadImages] = useState([]);

  // Updates the image grid
  async function updateImageGrid(username) {
    //var userId = await getUserId(username);
    //var imageLibrary = await getUserPublicPhotoLibrary(userId);
    //var url = 'https://api.rec.net/api/images/v4/player/2548967/?skip=0&take=100000';
    var urlUserInfo = 'https://rn-rest-api.herokuapp.com/account/?u=' + username;

    console.log('Fetching Data:');
    const responseUserInfo = await fetch(urlUserInfo);
    console.log(responseUserInfo);
    const jsonData = await responseUserInfo.json();
    console.log(jsonData);

    var GET_IMAGES_URL = 'https://api.rec.net/api/images/v4/player/'
    var GET_IMAGES_PARAMS = '?skip=0&take=100000'
    var imageLibraryUrl = GET_IMAGES_URL + jsonData.accountId + GET_IMAGES_PARAMS;
    console.log(imageLibraryUrl);
    const responseUserImages = await fetch(imageLibraryUrl);
    const jsonUserImagesData = await responseUserImages.json();

    console.log(jsonUserImagesData);
    loadImages(jsonUserImagesData);
  }

  return (
    <div className="ImageBrowser">
      <ImageBrowserHeader onUpdate={updateImageGrid} />
      <ImageBrowserMain userId={0} images={images} />
    </div>
  );
}

export default ImageBrowser;
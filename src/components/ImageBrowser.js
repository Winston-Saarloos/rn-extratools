import React from 'react'
import { useState } from 'react';
import ImageBrowserHeader from './ImageBrowserHeader';
import ImageBrowserMain from './ImageBrowserMain';

function ImageBrowser() {
  const [images, loadImages] = useState([
    { "Id": 58996903, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "2e5c45d80bca40d6b4873ecd4334d7a6.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [379678, 469152], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-20T02:14:59.9226077Z", "CheerCount": 0, "CommentCount": 0 }, 
    { "Id": 58764083, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "4731f177768d41b8a773147119cda9c4.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [256147, 469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T03:14:38.1088763Z", "CheerCount": 1, "CommentCount": 0 }, 
    { "Id": 58762516, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "dedd555ee8dd4a34992357d4f412c35c.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T03:06:39.8590331Z", "CheerCount": 0, "CommentCount": 0 }, 
    { "Id": 58753922, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "293662de8442475b942aa7b16a14b0df.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:27:09.214723Z", "CheerCount": 0, "CommentCount": 0 }, 
    { "Id": 58753881, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "9e70fb485ee5447ea86445b7643fc5f5.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:26:57.5954549Z", "CheerCount": 0, "CommentCount": 0 }, 
    { "Id": 58748964, "Type": 1, "Accessibility": 1, "AccessibilityLocked": false, "ImageName": "2ec2ca3f35dd44aea336071c5fe781a2.jpg", "Description": null, "PlayerId": 256147, "TaggedPlayerIds": [469152, 4834770], "RoomId": 170141, "PlayerEventId": null, "CreatedAt": "2021-02-19T02:05:13.0826248Z", "CheerCount": 0, "CommentCount": 0 }
  ]);

    return (
      <div className="ImageBrowser">
          <ImageBrowserHeader />
          <ImageBrowserMain userId = {0} images={images}/>
      </div>
    );
  }
  
export default ImageBrowser;
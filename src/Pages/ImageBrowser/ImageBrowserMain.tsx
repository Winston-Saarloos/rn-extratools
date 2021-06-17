import React from 'react'
import Header from '../Header';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

// Custom Component/Constants
import GridView from './GridView';
import ImageBrowserHeader from './ImageBrowserHeader';
import * as Constants from './Constants';

// Type structure for imageRequestParameters
type imageRequestParameters = {
  Url: string,
  DisplayOrder: number,
  ImageLocation: number,
  SkipAmount: number,
  TakeAmount: number,
  Query?: string | null,
  FilterString: string
}

function ImageBrowserMain() {
  const [imageRequestParams, setImageRequestParams] = React.useState<imageRequestParameters>();

  async function LoadImages(imageLocation: number, displayOrder: number, searchQuery: string, filterString: string) {
    var takeAmount = 100000;
    var skipAmount = 0;
    var szUrl = `${Constants.BASE_URL}images`;

    // Hard coded take amounts since these photo locations contain millions of images
    if (imageLocation === Constants.GLOBAL_IMAGE_FEED) {
      takeAmount = 2000;

    } else if (imageLocation === Constants.ROOM_IMAGE_FEED) {
      takeAmount = 5000;

      // If a user applies a filter I double the take amount since the 
      // returned amount *should* be less than the take amount
      if (filterString !== '') {
        takeAmount = 10000;
      }
    }
    
    setImageRequestParams({
      "Url": szUrl,
      "DisplayOrder": displayOrder,
      "ImageLocation": imageLocation,
      "SkipAmount": skipAmount,
      "TakeAmount": takeAmount,
      "Query": searchQuery,
      "FilterString": filterString
    });
  }

  return (
    <div style={{ marginTop: 70 }} className="ImageBrowserMain">
      <Header title={"RR Image Browser"} />
      <Grid container style={{margin: 0, width: '100%',}} direction="column">
        <Grid item xs={12}>
          <Grid container alignItems="flex-start" spacing={0} direction="row">
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
import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoadIcon from '@material-ui/icons/AutorenewOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//import { useState } from 'react';
//import axios from 'axios';
//import Grid from '@material-ui/core/Grid';

// Component imports

// Styling
import './ImageBrowserHeader.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageLocation: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: "100%",
  },
  nameTextBox: {
    width: "100%",
    minWidth: 200,
    margin: theme.spacing(1),
  },
  loadImagesButton: {
    width: "100%",
    minWidth: 200,
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  displayOrder: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: "100%",
  },
}));

function ImageBrowserHeader(props) {
  const classes = useStyles();
  const [imageLocation, setImageLocation] = React.useState(0);
  const handleImageLocationChange = (event) => {
    setImageLocation(event.target.value);
  };

  const [displayOrder, setDisplayOrder] = React.useState(0);
  const handleDisplayOrderChange = (event) => {
    setDisplayOrder(event.target.value);
  };

  return (
    <div className="ImageBrowserHeader">
      <Grid container spacing={0} direction="row">
        <Grid item xs={12} className="orangeB"></Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.imageLocation}>
              <InputLabel id="lblImageLocation">Image Location</InputLabel>
              <Select labelId="lblImageLocation" id="cboFeedType" value={imageLocation} onChange={handleImageLocationChange} label="Image Location">
                <MenuItem value={1}>Global Feed</MenuItem>
                <MenuItem value={2}>User Photo Feed</MenuItem>
                <MenuItem value={3}>User Photo Library</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.displayOrder}>
              <InputLabel id="lblDisplayOrder">Display Order</InputLabel>
              <Select labelId="lblDisplayOrder" id="cboDisplayOrder" value={displayOrder} onChange={handleDisplayOrderChange} label="Display Order">
                <MenuItem value={1}>Oldest To Newest</MenuItem>
                <MenuItem value={2}>Newest To Oldest</MenuItem>
                <MenuItem value={3}>Cheers Ascending</MenuItem>
                <MenuItem value={4}>Cheers Descending</MenuItem>
                <MenuItem value={5}>Comment Count Ascending</MenuItem>
                <MenuItem value={6}>Comment Count Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <TextField id="txtRecRoomUsername" className={classes.nameTextBox} label="RR @ Name" variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={2}>
            <Button id="btnLoadImages" variant="contained" className={classes.loadImagesButton} size="large" color="primary" onClick={props.LoadImages} startIcon={<LoadIcon />}>Load Images</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserHeader;
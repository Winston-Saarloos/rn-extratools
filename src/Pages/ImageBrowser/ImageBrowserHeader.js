import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoadIcon from '@material-ui/icons/AutorenewOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ImageBrowserHeader() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div className="ImageBrowserHeader">
            <Paper>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Image Location</InputLabel>
                    <Select labelId="demo-simple-select-outlined-label" id="cboFeedType" value={age} onChange={handleChange} label="Image Location">
                        <MenuItem value={1}>Global Feed</MenuItem>
                        <MenuItem value={2}>User Photo Feed</MenuItem>
                        <MenuItem value={3}>User Photo Library</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="txtRecRoomUsername" label="RR @ Name" variant="outlined" />
                <Button id="btnLoadImages" variant="contained" color="primary" startIcon={<LoadIcon />}>Load Images</Button>
            </Paper>
        </div>
    );
}

export default ImageBrowserHeader;
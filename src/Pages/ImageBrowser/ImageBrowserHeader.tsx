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
import Grid from '@material-ui/core/Grid';

// Component imports
import Modal from './SearchFilterModal';

// Styling
import './ImageBrowserHeader.css';
import FilterListIcon from '@material-ui/icons/FilterList';
//import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';

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

interface IProps {
  loadImages: Function;
}

function ImageBrowserHeader({ loadImages }: IProps) {
  const classes = useStyles();
  const [imageLocation, setImageLocation] = React.useState<number>(1);
  const [imageDisplayOrder, setImageDisplayOrder] = React.useState<number>(1);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Modal
  const [open, setOpen] = React.useState(false);

  // Text Select
  // const [searchCategory, setSearchCategory] = React.useState("1");


  const changeImageLocation = (event: React.ChangeEvent<{ value: number }>) => {
    return setImageLocation(event.target.value as number);
  };

  const changeImageDisplayOrder = (event: React.ChangeEvent<{ value: number }>) => {
    return setImageDisplayOrder(event.target.value as number);
  };

  const changeSearchQuery = (event: React.ChangeEvent<{ value: string }>) => {
    return setSearchQuery(event.target.value as string);
  };

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchCategory(event.target.value);
  // };

  return (
    <div className="ImageBrowserHeader">
      <Grid container spacing={0} direction="row">
        <Grid item xs={12} className="orangeB"></Grid>
        <Grid item xs={12} md={6} lg={2} xl={2} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.imageLocation}>
              <InputLabel id="lblImageLocation">Image Location</InputLabel>
              <Select labelId="lblImageLocation" id="cboFeedType" label="Image Location" value={imageLocation} onChange={changeImageLocation} defaultValue={1}>
                <MenuItem value={1}>User Photo Feed</MenuItem>
                <MenuItem value={2}>User Photo Library</MenuItem>
                <MenuItem value={3}>Global Image Feed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.displayOrder}>
              <InputLabel id="lblDisplayOrder">Display Order</InputLabel>
              <Select labelId="lblDisplayOrder" id="cboDisplayOrder" label="Display Order" value={imageDisplayOrder} onChange={changeImageDisplayOrder} defaultValue={1} >
                <MenuItem value={1}>Newest To Oldest</MenuItem>
                <MenuItem value={2}>Oldest To Newest</MenuItem>
                <MenuItem value={3}>Lowest Cheer #</MenuItem>
                <MenuItem value={4}>Highest Cheer #</MenuItem>
                <MenuItem value={5}>Lowest Comment #</MenuItem>
                <MenuItem value={6}>Highest Comment #</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <TextField id="txtSearch" autoFocus className={classes.nameTextBox} label="Enter Search.." variant="outlined" onChange={changeSearchQuery} value={searchQuery} />
            {/* <TextField id="txtSearch" select label="Enter Search.." className={classes.nameTextBox} value={searchCategory} onChange={handleChange} SelectProps={{ native: true, }} variant="outlined" >
              <option key="playerSearch" value="1">@</option>
              <option key="roomSearch" value="2">^</option>
            </TextField> */}
          </Box>
        </Grid>
        <Grid item xs={10} md={5} lg={3} xl={4} className="orangeB">
          <Box display="flex" justifyContent="center" p={2}>
            <Button id="btnLoadImages" variant="contained" onClick={() => loadImages(imageLocation, imageDisplayOrder, searchQuery)} className={classes.loadImagesButton} size="large" color="primary" startIcon={<LoadIcon />}>Load Images</Button>
          </Box>
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="orangeB">
          <Box display="flex" justifyContent="center" p={2}>
            <IconButton color="secondary" aria-label="advanced search" component="span" onClick={() => handleClickOpen()} >
              <FilterListIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} />
    </div>
  );
}

export default ImageBrowserHeader;
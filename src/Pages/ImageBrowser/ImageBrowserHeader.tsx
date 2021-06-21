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

// Custom components/constants
import Modal from './SearchFilterModal';
import * as Constants from './Constants';

// Styling
import FilterListIcon from '@material-ui/icons/FilterList';
import { Badge, IconButton } from '@material-ui/core';

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

interface FilterItemData {
  key: number;
  label: string;
  type: number;
  negate: boolean;
  isValid: boolean;
  filterString: string;
}

interface IProps {
  loadImages: Function;
}

function ImageBrowserHeader({ loadImages }: IProps) {
  const classes = useStyles();
  const [imageLocation, setImageLocation] = React.useState<number>(Constants.USER_PHOTO_FEED);
  const [imageDisplayOrder, setImageDisplayOrder] = React.useState<number>(Constants.NEWEST_TO_OLDEST);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filterItemDataLength, setFilterItemDataLength] = React.useState<string>('');
  const [filterString, setFilterString] = React.useState<string>('');

  // Modal
  const [open, setOpen] = React.useState(false);

  // Text Select
  const changeImageLocation = (event: React.ChangeEvent<{ value: number }>) => {
    if (imageLocation === Constants.ROOM_IMAGE_FEED && event.target.value !== Constants.ROOM_IMAGE_FEED && searchQuery !== '') {
      setSearchQuery('');
      
    } else if ((imageLocation === Constants.USER_PHOTO_FEED || imageLocation === Constants.USER_PHOTO_LIBRARY) && 
               (event.target.value !== Constants.USER_PHOTO_FEED && event.target.value !== Constants.USER_PHOTO_LIBRARY) && searchQuery !== '') {
      setSearchQuery('');
    }

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

  const handleClose = (filterObject: FilterItemData[]) => {
    // Call function to handling turning these into a string..

    var szFilterNum: string = filterObject.length.toString();
    filterObject.forEach(filterItem => {
      if (filterItem.filterString === '' || filterItem.filterString === 'INVALID_VALUE') {
        szFilterNum = 'ERROR!';
      }
    });

    if (filterObject.length.toString() !== filterItemDataLength) {
      // Reload the images using the defined filters
      loadImages(imageLocation, imageDisplayOrder, searchQuery, assembleFilterString(filterObject));
    }

    setFilterString(assembleFilterString(filterObject));
    setFilterItemDataLength(szFilterNum);
    setOpen(false);
  };

  // Reloads images when the enter key is pressed
  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      loadImages(imageLocation, imageDisplayOrder, searchQuery, filterString);
    }
  }

  // Assembles all filter items into a single string separated by the ( $ ) symbol
  function assembleFilterString(filterObject: FilterItemData[]): string {
    var filter: string = '';

    if (filterObject.length === 1) {
      filter = filterObject[0].filterString;

    } else if (filterObject.length > 1) {

      // Each filter item is separated by a $
      filterObject.forEach(filterItem => {
        if (filterItem.key === (filterObject.length - 1)) {
          filter += filterItem.filterString;
        } else {
          filter += filterItem.filterString + Constants.FILTER_DELIMITER_SYMBOL;
        }
      });
    }

    return filter
  }

  let filterDataLength;
  if (filterItemDataLength === '') {
    filterDataLength = 0;
  } else if (filterItemDataLength === 'ERROR!') {
    filterDataLength = 'ERROR!';
  } else {
    filterDataLength = parseInt(filterItemDataLength);
  }

  let searchInput;
  if (imageLocation === Constants.ROOM_IMAGE_FEED) {
    searchInput = <TextField id="txtSearchRoom" autoFocus className={classes.nameTextBox} label="Enter RR Room Name.." variant="outlined" onChange={changeSearchQuery} onKeyDown={handleKeyDown} value={searchQuery} />;
    
  } else if (imageLocation === Constants.USER_PHOTO_FEED || imageLocation === Constants.USER_PHOTO_LIBRARY) {
    searchInput = <TextField id="txtSearchUsername" autoFocus className={classes.nameTextBox} label="Enter RR '@' Name.." variant="outlined" onChange={changeSearchQuery} onKeyDown={handleKeyDown} value={searchQuery} />;
  }

  return (
    <div className="ImageBrowserHeader">
      <Grid container spacing={0} direction="row">
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6} lg={2} xl={2} >
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.imageLocation}>
              <InputLabel id="lblImageLocation">Image Location</InputLabel>
              <Select labelId="lblImageLocation" id="cboFeedType" label="Image Location" value={imageLocation} onChange={changeImageLocation} >
                <MenuItem value={Constants.USER_PHOTO_FEED}>User Photo Feed</MenuItem>
                <MenuItem value={Constants.USER_PHOTO_LIBRARY}>User Photo Library</MenuItem>
                <MenuItem value={Constants.GLOBAL_IMAGE_FEED}>Global Image Feed</MenuItem>
                <MenuItem value={Constants.ROOM_IMAGE_FEED }>Room Image Feed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={2} >
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.displayOrder}>
              <InputLabel id="lblDisplayOrder">Display Order</InputLabel>
              <Select labelId="lblDisplayOrder" id="cboDisplayOrder" label="Display Order" value={imageDisplayOrder} onChange={changeImageDisplayOrder} >
                <MenuItem value={Constants.NEWEST_TO_OLDEST}>Newest To Oldest</MenuItem>
                <MenuItem value={Constants.OLDEST_TO_NEWEST}>Oldest To Newest</MenuItem>
                <MenuItem value={Constants.LOWEST_CHEER_COUNT_FIRST}>Lowest Cheer #</MenuItem>
                <MenuItem value={Constants.HIGHEST_CHEER_COUNT_FIRST}>Highest Cheer #</MenuItem>
                <MenuItem value={Constants.LOWEST_COMMENT_COUNT_FIRST}>Lowest Comment #</MenuItem>
                <MenuItem value={Constants.HIGHEST_COMMENT_COUNT_FIRST}>Highest Comment #</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} >
          <Box display="flex" justifyContent="center" p={1} >
            {searchInput}
          </Box>
        </Grid>
        <Grid item xs={10} md={5} lg={3} xl={4} >
          <Box display="flex" justifyContent="center" p={2}>
            <Button id="btnLoadImages" variant="contained" onClick={() => loadImages(imageLocation, imageDisplayOrder, searchQuery, filterString)} className={classes.loadImagesButton} size="large" color="primary" startIcon={<LoadIcon />}>Load Images</Button>
          </Box>
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} >
          <Box display="flex" justifyContent="center" p={2}>
            <IconButton color="secondary" aria-label="advanced search" component="span" onClick={() => handleClickOpen()} >
              <Badge color="error" badgeContent={filterDataLength}>
                <FilterListIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} />
    </div>
  );
}

export default ImageBrowserHeader;
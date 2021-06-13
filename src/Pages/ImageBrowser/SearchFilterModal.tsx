// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import {
  Box, Checkbox, Chip, FormControl, FormControlLabel, InputLabel, makeStyles,
  MenuItem, Paper, Select, TextField, Theme, Typography
} from '@material-ui/core';
import React, { useEffect } from 'react';

// Icons
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';

// Non-Material Imports
import axios from 'axios';
import { DateTime } from "luxon";

// Component Props
type ModalProps = {
  open: boolean,
  onClose: Function,
}

type props = {
  variant: 'filled' | 'outlined' | undefined;
  color: 'default' | 'primary' | 'secondary' | undefined;
}

// Interface that contains information related to each filter criteria item
// key - Item number of the object in the array
// label - the label of the item when displaying in the UI
// type - Tells if this items is an ACCOUNT, EVENT, Etc.
// negate - determines if the given value should not be included in the result set
// isValid - value that is toggled when ACCOUNT/ROOM names are successfully verified to exist/be valid
// filterString - the string representation of the filter string.  All of these get contatenated when send to the REST API
interface FilterItemData {
  key: number;
  label: string;
  type: number;
  negate: boolean;
  isValid: boolean;
  filterString: string;
}

type RoomInfoObject = {
  RoomId: number,
  IsDorm: boolean,
  MaxPlayerCalculationMode: number,
  MaxPlayers: number,
  CloningAllowed: boolean,
  DisableMicAutoMute: boolean,
  DisableRoomComments: boolean,
  EncryptVoiceChat: boolean,
  LoadScreenLocked: boolean,
  Name: string,
  Description: string,
  ImageName: string,
  WarningMask: number,
  CustomWarning: string | null,
  CreatorAccountId: number,
  State: number,
  Accessibility: number,
  SupportsLevelVoting: boolean,
  IsRRO: boolean,
  SupportsScreens: boolean,
  SupportsWalkVR: boolean,
  SupportsTeleportVR: boolean,
  SupportsVRLow: boolean,
  SupportsQuest2: boolean,
  SupportsMobile: true,
  SupportsJuniors: boolean,
  MinLevel: number,
  CreatedAt: string,
  Stats: {
    CheerCount: number,
    FavoriteCount: number,
    VisitorCount: number,
    VisitCount: number
  }
}

type RoomInfoResult = {
  dataObject: RoomInfoObject[],
  status: number,
  message: string
}

type AccountInfoObject = {
  accountId: number,
  username: string,
  displayName: string,
  profileImage: string | null,
  bannerImage: string | null,
  isJunior: boolean,
  platforms: number,
  createdAt: string
}

type accountInfoResult = {
  dataObject: AccountInfoObject,
  status: number,
  message: string
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}),
);

function Modal(props: ModalProps) { //props: ModalProps
  const classes = useStyles();

  // Type Constants
  const USER_ACCOUNT = 1;
  const ACTIVITY = 2;
  const EVENT = 3;
  const DATE = 4;
  const DATE_RANGE = 5;
  const CHEER_COUNT = 6;
  const COMMENT_COUNT = 7;

  const [advancedFilterString, setAdvancedFilterString] = React.useState<string>('');
  const [advancedFilterStringTwo, setAdvancedFilterStringTwo] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const [criteriaType, setCriteriaType] = React.useState<number>(1);
  const [filterItemData, setFilterItemData] = React.useState<FilterItemData[]>([]);

  // Attempt to validate the filter criteria.. once validated add filter string and set value to true
  // Use Effect passing in chip data.. for each over all if one is not validated then attempt to validate
  useEffect(() => {
    console.log("Data changed attempting to validate..");
    if (filterItemData !== undefined) {
      console.log("Filter data contains values...");
      filterItemData.forEach((filterItem, index) => {

        if (filterItem.isValid === false) {
          console.log("Attempting to validate value...");
          var newFilterItemData = [...filterItemData];

          // Attempt to validate a user account
          if (filterItem.type === USER_ACCOUNT) {
            console.log("Attempting to validate USER_ACCOUNT value..");
            var responseObject: accountInfoResult = {
              dataObject: {
                accountId: -1,
                username: '',
                displayName: '',
                profileImage: null,
                bannerImage: null,
                isJunior: false,
                platforms: -1,
                createdAt: ''
              },
              status: -1,
              message: ''
            };

            var szUrl = 'https://rn-rest-api.herokuapp.com/account?u=' + filterItem.label;

            axios.get(szUrl)
              .then(async function (response) {
                responseObject = await response.data;

                if (responseObject.status === 200) {
                  var filterText = 'U|';
                  filterItem.isValid = true;

                  if (filterItem.negate === true) {
                    filterText = '!U|';
                  }

                  filterItem.filterString = filterText + responseObject.dataObject.accountId; // !A|GoldenTrophy

                  // Add our modified object to the old list
                  newFilterItemData.splice(index, 1, filterItem);
                  setFilterItemData(newFilterItemData);

                } else {
                  var originalValue = filterItem.label;
                  filterItem.label = `INVALID VALUE: ${originalValue}`;
                  filterItem.isValid = true;
                  filterItem.filterString = 'INVALID_VALUE';

                  newFilterItemData.splice(index, 1, filterItem);
                  setFilterItemData(newFilterItemData);
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
                var originalValue = filterItem.label;
                filterItem.label = `ERROR: ${originalValue}`;
                filterItem.isValid = true;
                filterItem.filterString = 'ERROR_OCCURED';

                newFilterItemData.splice(index, 1, filterItem);
                setFilterItemData(newFilterItemData);
              })


          } else if (filterItem.type === ACTIVITY) {
            // VALIDATE ACTIVITY HERE
            console.log("Attempting to validate ACTIVITY value..");
            var responseObjectRoom: RoomInfoResult = {
              dataObject: [{
                RoomId: -1,
                IsDorm: false,
                MaxPlayerCalculationMode: -1,
                MaxPlayers: -1,
                CloningAllowed: false,
                DisableMicAutoMute: false,
                DisableRoomComments: false,
                EncryptVoiceChat: false,
                LoadScreenLocked: false,
                Name: '',
                Description: '',
                ImageName: '',
                WarningMask: -1,
                CustomWarning: null,
                CreatorAccountId: -1,
                State: -1,
                Accessibility: -1,
                SupportsLevelVoting: false,
                IsRRO: false,
                SupportsScreens: false,
                SupportsWalkVR: false,
                SupportsTeleportVR: false,
                SupportsVRLow: false,
                SupportsQuest2: false,
                SupportsMobile: true,
                SupportsJuniors: false,
                MinLevel: -1,
                CreatedAt: '',
                Stats: {
                  CheerCount: -1,
                  FavoriteCount: -1,
                  VisitorCount: -1,
                  VisitCount: -1
                }
              }],
              status: -1,
              message: ''
            };

            var szRoomUrl = 'https://rn-rest-api.herokuapp.com/bulk/rooms?name=' + filterItem.label;

            axios.get(szRoomUrl)
              .then(async function (response) {
                responseObjectRoom = await response.data;

                if (responseObjectRoom.status === 200) {
                  var filterText = 'A|';
                  filterItem.isValid = true;

                  if (filterItem.negate === true) {
                    filterText = '!A|';
                  }

                  console.log(responseObjectRoom);

                  filterItem.filterString = filterText + responseObjectRoom.dataObject[0].RoomId; // !A|GoldenTrophy

                  // Add our modified object to the old list
                  newFilterItemData.splice(index, 1, filterItem);
                  setFilterItemData(newFilterItemData);

                } else {
                  var originalValue = filterItem.label;
                  filterItem.label = `INVALID VALUE: ${originalValue}`;
                  filterItem.isValid = true;
                  filterItem.filterString = 'INVALID_VALUE';

                  newFilterItemData.splice(index, 1, filterItem);
                  setFilterItemData(newFilterItemData);
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
                var originalValue = filterItem.label;
                filterItem.label = `ERROR: ${originalValue}`;
                filterItem.isValid = true;
                filterItem.filterString = 'ERROR_OCCURED';

                newFilterItemData.splice(index, 1, filterItem);
                setFilterItemData(newFilterItemData);
              })
          }
        }
      });
    }
  }, [filterItemData]);

  // Check Box State
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Text Box
  const updateAdvancedFilterString = (event: React.ChangeEvent<{ value: string }>) => {
    return setAdvancedFilterString(event.target.value as string);
  };

  const updateAdvancedFilterStringTwo = (event: React.ChangeEvent<{ value: string }>) => {
    return setAdvancedFilterStringTwo(event.target.value as string);
  };

  const handleDelete = (chipToDelete: FilterItemData) => () => {
    setFilterItemData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // Type Drop Down
  const changeCriteriaType = (event: React.ChangeEvent<{ value: number }>) => {
    return setCriteriaType(event.target.value as number);
  };

  const handleAdd = () => {
    if (advancedFilterString !== '') {
      var newFilterItemData = [...filterItemData];
      var labelText = '';
      var filterPrefix = '';
      var filterString = '';

      if (advancedFilterStringTwo !== '') {
        if (criteriaType === DATE_RANGE) {
          var dateObj1 = DateTime.fromISO(advancedFilterString);
          var dateLabelText1 = dateObj1.toLocaleString();

          var dateObj2 = DateTime.fromISO(advancedFilterStringTwo);
          var dateLabelText2 = dateObj2.toLocaleString();

          labelText = `${dateLabelText1} - ${dateLabelText2}`;

          filterPrefix = 'DR|';

          if (checked === true) {
            filterPrefix = '!DR|';
          }
      
          filterString = `${filterPrefix}${dateObj1.toISODate()}!${dateObj2.toISODate()}`;

        } else {
          labelText = `${advancedFilterString} - ${advancedFilterStringTwo}`; // I'm not sure what this "else" is used for.
        }
      } else {
        if (criteriaType === DATE) {
          var dateObj = DateTime.fromISO(advancedFilterString);
          var dateLabelText = dateObj.toLocaleString();

          labelText = dateLabelText;

          filterPrefix = 'D|';

          if (checked === true) {
            filterPrefix = '!D|';
          }
      
          filterString = `${filterPrefix}${dateObj.toISODate()}`;
      
        } else {
          labelText = advancedFilterString;
        }
      }

      newFilterItemData.push({ key: filterItemData.length, label: labelText, type: criteriaType, negate: checked, isValid: false, filterString: filterString });
      setFilterItemData(newFilterItemData);

      // Reset form values for next user input...
      setCriteriaType(USER_ACCOUNT);
      setChecked(false);
      setAdvancedFilterString('');
      setAdvancedFilterStringTwo('');
    }
    console.log(filterItemData);
  };

  let emptyFilterMessage;

  if (filterItemData.length === 0) {
    emptyFilterMessage = <Typography>No Filter Criteria to Display</Typography>;
  }

  // Manipulate the UI based on the select value
  let filterInput = <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
    <TextField autoFocus id="outlined-multiline-static" onChange={updateAdvancedFilterString} label="Filter String" fullWidth value={advancedFilterString} variant="outlined" />
  </Grid>;
  let filterInput2;

  if (criteriaType === DATE) {
    filterInput = <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
      <form className={classes.container} noValidate>
        <TextField id="dtInput1" fullWidth label="Date Input 1" onChange={updateAdvancedFilterString} type="date" value={advancedFilterString} className={classes.textField} InputLabelProps={{ shrink: true, }} />
      </form>
    </Grid>;
  } else if (criteriaType === DATE_RANGE) {
    filterInput = <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
      <form className={classes.container} noValidate>
        <TextField id="dtInput1" fullWidth label="Date Input 1" onChange={updateAdvancedFilterString} value={advancedFilterString} type="date" className={classes.textField} InputLabelProps={{ shrink: true, }} />
      </form>
    </Grid>;
    filterInput2 = <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
      <form className={classes.container} noValidate>
        <TextField id="dtInput2" fullWidth label="Date Input 2" onChange={updateAdvancedFilterStringTwo} value={advancedFilterStringTwo} type="date" className={classes.textField} InputLabelProps={{ shrink: true, }} />
      </form>
    </Grid>;
  }

  return (
    <Dialog maxWidth={false} fullWidth open={props.open} onClose={() => props.onClose(filterItemData)} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Advanced Filters</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
            <Box display="flex" justifyContent="flex-start" alignItems="flex-end" p={1} >
              <Typography>Filter Criteria:</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="orangeB">
            <Paper component="ul" className={classes.root}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                  <Box display="flex" justifyContent="center" p={1} >
                    {filterItemData.map((data) => {
                      let icon;
                      let props: props = { variant: 'filled', color: 'primary' };

                      if (data.negate === true) {
                        props.variant = 'outlined';
                      }

                      if (data.isValid === false && (data.type === USER_ACCOUNT || data.type === ACTIVITY)) {
                        props.color = 'secondary';
                      }

                      if (data.type === ACTIVITY) { // This should be a select case instead..
                        icon = <HomeIcon />;
                      } else if (data.type === USER_ACCOUNT) {
                        icon = <PersonIcon />;
                      } else if (data.type === EVENT) {
                        icon = <EventNoteIcon />;
                      } else if (data.type === DATE) {
                        icon = <TodayIcon />;
                      } else if (data.type === DATE_RANGE) {
                        icon = <DateRangeIcon />;
                      } else if (data.type === CHEER_COUNT) {
                        icon = <ThumbUpIcon />;
                      } else if (data.type === COMMENT_COUNT) {
                        icon = <ChatIcon />;
                      } else {
                        icon = <HelpOutlineIcon />;
                      }
                      return (
                        <li key={data.key}>
                          <Chip icon={icon} variant={props.variant} color={props.color} label={data.label} onDelete={handleDelete(data)} className={classes.chip} />
                        </li>
                      );
                    })}
                    {emptyFilterMessage}
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                  <Typography variant="caption" display="block" gutterBottom>
                    Please do not close filter window until all criteria show in a "purple" color.  User account and activity names go through validation to make sure they exist in Rec Room.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="orangeB">
            <Paper className={classes.root}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="lblCriteriaType">Criteria Type</InputLabel>
                    <Select labelId="lblCriteriaType" id="cboFeedType" label="Criteria Type" value={criteriaType} onChange={changeCriteriaType} defaultValue={1}>
                      <MenuItem value={1}>User Account</MenuItem>
                      <MenuItem value={2}>Room</MenuItem>
                      {/* <MenuItem value={3}>Event</MenuItem> */}
                      <MenuItem value={4}>Date</MenuItem>
                      <MenuItem value={5}>Date Range</MenuItem>
                      {/* <MenuItem value={6}>Cheer Count</MenuItem>
                      <MenuItem value={7}>Comment Count</MenuItem> */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                  <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} name="checkedB" color="primary" />} label="Do not include value in results" />
                </Grid>
                {filterInput}
                {filterInput2}
                <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                  <Box display="flex" justifyContent="center" p={1} >
                    <Button fullWidth variant="contained" color="primary" onClick={handleAdd} >Add Item</Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose(filterItemData)} variant="contained" color="primary" size="large" startIcon={<CloseIcon />}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;
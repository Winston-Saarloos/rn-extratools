// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { Box, Checkbox, Chip, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Theme, Typography } from '@material-ui/core';
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

// Component Props
type ModalProps = {
  open: boolean,
  onClose: Function,
}

type props = {
  variant: 'filled' | 'outlined' | undefined;
  color: 'default' | 'primary' | 'secondary' | undefined;
}

interface ChipData {
  key: number;
  label: string;
  type: number;
  negate: boolean;
  isValid: boolean;
  filterString: string;
}

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
  const [chipData, setChipData] = React.useState<ChipData[]>([]);

    // Attempt to validate the filter criteria.. once validated add filter string and set value to true
    // Use Effect passing in chip data.. for each over all if one is not validated then attempt to validate
    useEffect(() => {
        if (chipData !== undefined) {
          console.log("Data changed attempting to validate..");
          setAdvancedFilterString('');
        }
    }, [chipData]);

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

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // Type Drop Down
  const changeCriteriaType = (event: React.ChangeEvent<{ value: number }>) => {
    return setCriteriaType(event.target.value as number);
  };

  const handleAdd = () => {
    var chipList = chipData;
    var labelText = '';
    if (advancedFilterStringTwo !== '') {
      labelText = `${advancedFilterString} - ${advancedFilterStringTwo}`;
    } else {
      labelText = advancedFilterString;
    }
    chipList.push({key: chipData.length + 1, label: labelText, type: criteriaType, negate: checked, isValid: false, filterString: ''});
    setChipData(chipList);

    // Reset form values for next user input...
    setCriteriaType(USER_ACCOUNT);
    setChecked(false);
    setAdvancedFilterString('');
    setAdvancedFilterStringTwo('');
  };

  let emptyFilterMessage;

  if (chipData.length === 0) {
    emptyFilterMessage = <Typography>No Filter Criteria to Display</Typography>;
  }

  // Manipulate the UI based on the select value
  let filterInput = <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                      <TextField autoFocus id="outlined-multiline-static" onChange={updateAdvancedFilterString} label="Filter String" fullWidth value={advancedFilterString} variant="outlined" />
                    </Grid>;
  let filterInput2;

  if (criteriaType === DATE) {
    filterInput = <Grid item xs={12} md={12} lg={12} xl={12} className="orangeB">
                    <form className={classes.container} noValidate>
                      <TextField id="dtInput1" fullWidth label="Date Input 1" onChange={updateAdvancedFilterString} type="datetime-local" value={advancedFilterString} className={classes.textField} InputLabelProps={{shrink: true,}} />
                    </form>
                  </Grid>;
  } else if (criteriaType === DATE_RANGE) {
    filterInput = <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
                    <form className={classes.container} noValidate>
                      <TextField id="dtInput1" fullWidth label="Date Input 1" onChange={updateAdvancedFilterString} value={advancedFilterString} type="datetime-local" className={classes.textField} InputLabelProps={{shrink: true,}} />
                    </form>
                  </Grid>;
    filterInput2 = <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
                    <form className={classes.container} noValidate>
                      <TextField id="dtInput2" fullWidth label="Date Input 2" onChange={updateAdvancedFilterStringTwo} value={advancedFilterStringTwo} type="datetime-local" className={classes.textField} InputLabelProps={{shrink: true,}} />
                    </form>
                  </Grid>;
  }

  return (
    <Dialog maxWidth={false} fullWidth open={props.open} onClose={() => props.onClose()} aria-labelledby="max-width-dialog-title">
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
              {chipData.map((data) => {
                let icon;
                let props: props = {variant: 'filled', color: 'primary'};

                if (data.negate === true) {
                  props.variant = 'outlined';
                  props.color = 'primary';
                }

                if (data.isValid === false) {
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
                      <MenuItem value={3}>Event</MenuItem>
                      <MenuItem value={4}>Date</MenuItem>
                      <MenuItem value={5}>Date Range</MenuItem>
                      <MenuItem value={6}>Cheer Count</MenuItem>
                      <MenuItem value={7}>Comment Count</MenuItem>
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
        <Button onClick={() => props.onClose()} variant="contained" color="primary" size="large" startIcon={<CloseIcon />}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;
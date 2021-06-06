// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { Box, Checkbox, Chip, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Theme, Typography } from '@material-ui/core';
import React from 'react';

// Icons
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';

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
  type: string;
  negate: boolean;
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
}),
);

function Modal(props: ModalProps) { //props: ModalProps
  const classes = useStyles();
  const [advancedFilterString, setAdvancedFilterString] = React.useState<string>('');
  const [criteriaType, setCriteriaType] = React.useState<number>(1);
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'Rocko', type: 'account', negate: false },
    { key: 1, label: 'Boethiah', type: 'account', negate: true },
    { key: 2, label: 'Moloko.', type: 'account', negate: false },
    { key: 3, label: 'RecCenter', type: 'activity', negate: false},
    { key: 4, label: 'RecRoomBugReviewEvent', type: 'event', negate: false},
    { key: 5, label: '03-05-2020', type: 'date', negate: false},
    { key: 6, label: '(04-05-2020) - (05-12-2020)', type: 'dateRange', negate: false},
  ]);

  const updateAdvancedFilterString = (event: React.ChangeEvent<{ value: string }>) => {
    return setAdvancedFilterString(event.target.value as string);
  };

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // Type Drop Down
  const changeCriteriaType = (event: React.ChangeEvent<{ value: number }>) => {
    return setCriteriaType(event.target.value as number);
  };

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
                  props.color = 'secondary';
                }

                if (data.type === 'activity') {
                  icon = <HomeIcon />;
                } else if (data.type === 'account') {
                  icon = <PersonIcon />;
                } else if (data.type === 'event') {
                  icon = <EventNoteIcon />;
                } else if (data.type === 'date') {
                  icon = <TodayIcon />;
                } else if (data.type === 'dateRange') {
                  icon = <DateRangeIcon />;
                } else {
                  icon = <HelpOutlineIcon />;
                }

                return (
                  <li key={data.key}>
                    <Chip icon={icon} variant={props.variant} color={props.color} label={data.label} onDelete={handleDelete(data)} className={classes.chip} />
                  </li>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="orangeB">
            <Paper className={classes.root}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={8} md={8} lg={8} xl={8} className="orangeB">
                  <TextField autoFocus id="outlined-multiline-static" onChange={updateAdvancedFilterString} label="Filter String" fullWidth multiline defaultValue={advancedFilterString} variant="outlined" />
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4} className="orangeB">
                  <Box display="flex" justifyContent="center" p={1} >
                    <Button fullWidth variant="contained" color="primary">Add Item</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="lblCriteriaType">Criteria Type</InputLabel>
                    <Select labelId="lblCriteriaType" id="cboFeedType" label="Criteria Type" value={criteriaType} onChange={changeCriteriaType} defaultValue={1}>
                      <MenuItem value={1}>User Account</MenuItem>
                      <MenuItem value={2}>Room</MenuItem>
                      <MenuItem value={3}>Event</MenuItem>
                      <MenuItem value={4}>Date</MenuItem>
                      <MenuItem value={5}>Date Range</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6} className="orangeB">
                  <Box display="flex" justifyContent="center" p={1} >
                    <FormControlLabel control={<Checkbox checked={true} name="checkedB" color="primary" />} label="Do not include value in results" />
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
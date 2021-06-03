// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import Link from '@material-ui/core/Link';
//import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { InputLabel, Input, InputAdornment } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import React from 'react';

// Component Props
type ModalProps = {
  open: boolean,
  onClose: Function,
}

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

function Modal(props: ModalProps) { //props: ModalProps

  //const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Dialog maxWidth={'xl'} open={props.open} onClose={() => props.onClose()} aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Advanced Filters</DialogTitle>
      <DialogContent>
        Not Implemented Yet - This modal will be used to set filter criteria.
                <Divider variant="middle" />
        <Grid container spacing={0} direction="row">
          <Grid item xs={6} md={6} lg={6} xl={6} className="orangeB">
            <InputLabel htmlFor="standard-adornment-amount">Player Related</InputLabel>
            <Input id="standard-adornment-amount" value={values.amount} onChange={handleChange('amount')} startAdornment={<InputAdornment position="start">@</InputAdornment>} />
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
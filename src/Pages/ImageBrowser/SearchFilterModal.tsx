// Material Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import Link from '@material-ui/core/Link';
//import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
//import Grid from '@material-ui/core/Grid';

// Not Material Imports
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';

// Component Props
type ModalProps = {
    open: boolean,
    onClose: Function,
}

function Modal(props: ModalProps) { //props: ModalProps
    return (
        <Dialog maxWidth={'lg'} open={props.open} onClose={() => props.onClose()} aria-labelledby="max-width-dialog-title">
            <DialogTitle id="max-width-dialog-title">Advanced Filters</DialogTitle>
            <DialogContent>
                Not Implemented Yet - This modal will be used to set filter criteria.
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClose()} variant="contained" color="primary" size="large" startIcon={<CloseIcon />}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal;
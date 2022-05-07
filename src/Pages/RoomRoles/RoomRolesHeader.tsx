import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoadIcon from '@material-ui/icons/AutorenewOutlined';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    itemContainer: {
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    loadRolesButton: {
        width: "100%",
        minWidth: 200,
      },
      nameTextBox: {
        width: "100%",
        minWidth: 200,
      },
  }));

interface IProps {
    loadRoomRoles: Function;
} 

function RoomRolesHeader({loadRoomRoles}: IProps) {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = React.useState<string>('');

    const updateSearchQuery = (event: React.ChangeEvent<{ value: string }>) => {
        return setSearchQuery(event.target.value as string);
      };

    return (
        <div>
        <Grid container spacing={0} direction="row">
          <Grid item xs={2} md={1} lg={1} xl={1} >
            {/* Empty Item */}
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3} >
            <TextField id="txtRoomName" autoFocus className={classes.nameTextBox} value={searchQuery} onChange={updateSearchQuery} label="Enter Room Name.." variant="outlined" />
          </Grid>
          <Grid item xs={10} md={5} lg={3} xl={4} >
            <Box display="flex" justifyContent="center" p={2} className={classes.itemContainer}>
              <Button id="btnLoadRoles" variant="contained" className={classes.loadRolesButton} size="large" color="primary" onClick={() => loadRoomRoles(searchQuery)} startIcon={<LoadIcon />}>Load Roles</Button>
            </Box>
          </Grid>
          <Grid item xs={2} md={1} lg={1} xl={1} >
            {/* Empty Item */}
          </Grid>
        </Grid>
      </div>  
    );
}

export default RoomRolesHeader;
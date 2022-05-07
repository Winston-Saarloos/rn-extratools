import React from 'react';
import Header from '../Header';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import RoomRolesHeader from './RoomRolesHeader';
import RoomRolesGridView from './RoomRolesGridView';

function RoomRolesMain() {
    const [roomName, setRoomName] = React.useState<string>('');

    function LoadRoomRoles(searchQuery: string) {
        setRoomName(searchQuery);
    }

    return (
        <div style={{ marginTop: 70 }} className="">
            <Header title={"Room Roles"} />
            <Grid container style={{ margin: 0, width: '100%', }} direction="column">
                <Grid item xs={12}>
                    <Grid container alignItems="flex-start" spacing={0} direction="row">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <RoomRolesHeader loadRoomRoles={LoadRoomRoles} />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <Divider light />
                    <Grid id="gridView" item xs={12}>
                        <RoomRolesGridView roomName={roomName} />
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}

export default RoomRolesMain;
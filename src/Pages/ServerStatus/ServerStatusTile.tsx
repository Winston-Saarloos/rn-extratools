import React from 'react';
import Grid from '@material-ui/core/Grid';

type serverItem = {
    name: string,
    uri: string,
    statusCode: number
}

interface IProps {
    serverStatusList: serverItem[];
}

function ServerStatusTile({serverStatusList}: IProps) {

    console.log("Server Status List:");
    console.log(serverStatusList);

    if (serverStatusList && serverStatusList !== []) {
        return (
            <Grid container alignItems="flex-start" spacing={2} direction="row">
                {serverStatusList.map((server: serverItem, index: number) => {
                    return (
                        <Grid item xs={6} md={4} lg={3} xl={2} key={index} >
                            {server.name}
                        </Grid>
                    )
                })}
            </Grid>
        )
    } else {
        return (
            <>
                Loading...
            </>
        )
    }
}

export default ServerStatusTile;
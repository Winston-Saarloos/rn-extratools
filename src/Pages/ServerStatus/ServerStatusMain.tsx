import React from 'react';
import axios from 'axios';
import ServerStatusTile from './ServerStatusTile';
import * as Constants from '../Constants';
import Header from '../Header';
import Grid from '@material-ui/core/Grid';
import useAsyncEffect from 'use-async-effect';

type resultObject = {
    dataObject: serverItem[]
};

type serverItem = {
    name: string,
    uri: string,
    statusCode: number
}

function ServerStatusMain() {
    const [serverStatusList, setServerStatusList] = React.useState<resultObject>();

    var resultObject: resultObject = {dataObject: [], };
    useAsyncEffect(async () => {
        axios.get(Constants.BASE_URL + "status")
            .then(async function (response) {
                // handle success
                resultObject = await response.data;
                console.log("Result");
                console.log(resultObject);
                setServerStatusList(resultObject);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div style={{ marginTop: 70 }} className="">
            <Header title={"Server Status"} />
            <Grid container style={{ margin: 0, width: '100%', }} direction="column">
                <Grid item xs={12}>
                    <Grid container alignItems="flex-start" spacing={0} direction="row">
                        <Grid item xs={1} style={{ border: 'Solid 1px Red' }}>Status Page</Grid>
                        {/* {serverStatusList ? (
                        <Grid item xs={10} style={{ border: 'Solid 1px Blue' }}>
                            <ServerStatusTile serverStatusList={serverStatusList} />
                        </Grid>
                        ): null} */}
                        <Grid item xs={1} style={{ border: 'Solid 1px Red' }}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ServerStatusMain;
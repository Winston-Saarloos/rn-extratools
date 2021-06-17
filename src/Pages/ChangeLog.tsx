import { Link } from 'react-router-dom';
import MatLink from '@material-ui/core/Link';

// Material UI
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

function ChangeLog() {

    return (
        <div className="ChangeLog">
            <Grid container direction="row" spacing={3} >
                <Grid item xs={1} md={2} lg={2} xl={3}>
                </Grid>
                <Grid item xs={10} md={8} lg={8} xl={6}>
                    <Grid container direction="column" spacing={0} >
                        <Grid item>
                            <Paper elevation={2}>
                                <div id="Item-Title">
                                    <Typography variant="h4">
                                        About the Project
                                    </Typography>
                                </div>
                                <div id="Item-Body">
                                    <Typography variant="body1">
                                        Hello! This project is created and maintained by Rec Room user <strong>@Rocko</strong>. 
                                        If you have suggestions or feedback feel free to send me a message on Discord. (Rocko#8625)
                                        Project creation date: Feburary 9th, 2021.
                                    </Typography>
                                    <MatLink href={`https://github.com/Winston-Saarloos/rn-extratools`} target="_blank" rel="noopener" >Project Github Repo</MatLink>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2} lg={2} xl={3}>
                </Grid>

                <Grid item xs={1} md={2} lg={2} xl={3}>
                </Grid>
                <Grid item xs={10} md={8} lg={8} xl={6}>
                    <Grid container direction="column" spacing={0} >
                        <Grid item>
                            <Paper elevation={2}>
                                <div id="Item-Title">
                                    <Typography variant="h4">
                                        Image Browser v2.2.7
                                    </Typography></div>
                                <div id="Item-Body">
                                <Typography variant="body1">Use this application to view and search for public photos avaiable on rec.net</Typography>
                                    <Link to="/imagebrowser">Image Browser</Link>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2} lg={2} xl={3}>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default ChangeLog;
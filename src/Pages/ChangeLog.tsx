// Material UI
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Header from './Header';

function ChangeLog() {
    // Main Content Spacing
    const XS_MAIN_SPACING = 10;
    const MD_MAIN_SPACING = 10;
    const LG_MAIN_SPACING = 10;
    const XL_MAIN_SPACING = 10;

    // White Space Spacing Constants
    const XS_EMPTY_SPACING = 1;
    const MD_EMPTY_SPACING = 1;
    const LG_EMPTY_SPACING = 1;
    const XL_EMPTY_SPACING = 1;

    return (
        <div style={{ marginTop: 80 }} >
            <Header title={"Site Change Log"} />
            <Grid container direction="row" spacing={0}>
                <Grid item xs={1} md={2} lg={2} xl={3}>
                    {/* Empty Space */}
                </Grid>
                <Grid item xs={10} md={8} lg={8} xl={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/19/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        General Site:
                                        <ul>
                                            <li>Added new site change log page</li>
                                        </ul>
                                        Image Browser (v2.2.8):
                                        <ul>
                                            <li>Adjusted filter criteria modal to not be overly huge on large screens.</li>
                                            <li>Pressing the enter key after entering a room name or username will now load images (instead of pressing the button)</li>
                                            <li>Fixed bug with load images button that gave a weird message if the username box was left blank.</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/17/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        General Site
                                        <ul>
                                            <li>Fixed home page widths on smaller devices</li>
                                        </ul>

                                        Image Browser (v2.2.7):
                                        <ul>
                                            <li>General code clean up</li>
                                            <li>Image results now reload when a filter criteria is removed/added</li>
                                            <li>Event name now loads correctly when viewed in the image detail modal</li>
                                            <li>Fixed home page widths on smaller devices</li>
                                        </ul>
                                        
                                        REST API (v0.7.9):
                                        <ul>
                                            <li>Added URI for getting event information</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/14/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        Image Browser:
                                        <ul>
                                            <li>Updated UI to better handle image location changes</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/13/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        REST API (v0.7.8):
                                        <ul>
                                            <li>Updated to support date range filtering</li>
                                            <li>Updated to support looking up image feed from room name</li>
                                        </ul>

                                        Image Browser:
                                        <ul>
                                            <li>Added support for looking up image feed from a supplied room</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/11/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        REST API (v0.7.7):
                                        <ul>
                                            <li>Updated API to support user filtering</li>
                                        </ul>

                                        Image Browser:
                                        <ul>
                                            <li>Added support for filtering based on usernames</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/10/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        REST API (v0.7.6):
                                        <ul>
                                            <li>Updated API to support user filtering</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Paper elevation={2}>
                                <Grid container direction="row" spacing={0} >
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        <Typography variant="h5">Update - 6/9/2021</Typography>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>

                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                    <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                        Image Browser (v2.2.1):
                                        <ul>
                                            <li>Added result count above image thumbnail results</li>
                                            <li>Adjusted thumbnail size to 2 per row instead of 2 per row on iPad sized screens</li>
                                            <li>Partial implemenation of new filter criteria (Still a work in progress)</li>
                                            <li>Tweaked image detail data columns from 2 to 4 on extra large screen sizes</li>
                                            <li>Fixed an issue where players who were not tagged showed up as tagged in a photo with no tagged users</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                        {/* Empty Space */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChangeLog;
import { Link } from 'react-router-dom';
import MatLink from '@material-ui/core/Link';

// Material UI
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

function AppSelection() {
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
        <Grid container direction="row" spacing={2}>
            <Grid item xs={1} md={2} lg={2} xl={3}>
                {/* Empty Space */}
            </Grid>
            <Grid item xs={10} md={8} lg={8} xl={6}>
                <Paper elevation={2}>
                    <Grid container direction="row" spacing={1} >
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                            <Typography variant="h4">About the Project</Typography>
                        </Grid>
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>

                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                            <Typography variant="body1">
                                Hello! This project is created and maintained by Rec Room user <strong>@Rocko</strong>.  If you have suggestions or feedback feel free to send me a message on Discord. <strong>(Rocko#8625)</strong>  Project creation date: Feburary 9th, 2021.
                            </Typography>
                        </Grid>
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>

                        <Grid item xs={1} md={1} lg={1} xl={1}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={3} md={3} lg={3} xl={3}>
                            <MatLink href={`https://github.com/Winston-Saarloos/rn-extratools`} target="_blank" rel="noopener" >Project Github Repo</MatLink>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3} xl={3}>
                            <Link to="/ChangeLog">Change Log</Link>
                        </Grid>
                        <Grid item xs={5} md={5} lg={5} xl={8}>
                            {/* Empty Space */}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={1} md={2} lg={2} xl={3}>
                {/* Empty Space */}
            </Grid>

            <Grid item xs={1} md={2} lg={2} xl={3}>
                {/* Empty Space */}
            </Grid>
            <Grid item xs={10} md={8} lg={8} xl={6}>
                <Paper elevation={2}>
                    <Grid container direction="row" spacing={1} >
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                            <Typography variant="h4">Image Browser v2.2.7</Typography>
                        </Grid>
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>

                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                            <Typography variant="body1">Use this application to view and search for public photos avaiable on rec.net</Typography>
                        </Grid>
                        <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                            {/* Empty Space */}
                        </Grid>

                        <Grid item xs={1} md={1} lg={1} xl={1}>
                            {/* Empty Space */}
                        </Grid>
                        <Grid item xs={2} md={2} lg={2} xl={2}>
                            <Link to="/imagebrowser">Image Browser</Link>
                        </Grid>
                        <Grid item xs={9} md={9} lg={9} xl={9}>
                            {/* Empty Space */}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={1} md={2} lg={2} xl={3}>
                {/* Empty Space */}
            </Grid>
        </Grid>
    );
}

export default AppSelection;
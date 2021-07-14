import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setSuccess } from '../../../Store/Actions/authActions';
import { RootState } from '../../../Store';

import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Header from '../../Header';

export default function ManageUsers() {
    const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (success) {
            dispatch(setSuccess(''));
        }
    }, [success, dispatch]);

    console.log(user);

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

    if (!user) {
        console.log("User attempting to access user management while not logged in.. redirect..");
        history.push("/");
    }

    return (
        <div style={{ marginTop: 80 }}>
            <Header title={'Manage Users'} />
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
                                <Typography variant="h4">Hello {user?.firstName}!</Typography>
                            </Grid>
                            <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                {/* Empty Space */}
                            </Grid>

                            <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                {/* Empty Space */}
                            </Grid>
                            <Grid item xs={XS_MAIN_SPACING} md={MD_MAIN_SPACING} lg={LG_MAIN_SPACING} xl={XL_MAIN_SPACING}>
                                <Typography variant="body1">
                                    {needVerification && "Please verify your email address."}
                                </Typography>
                            </Grid>
                            <Grid item xs={XS_EMPTY_SPACING} md={MD_EMPTY_SPACING} lg={LG_EMPTY_SPACING} xl={XL_EMPTY_SPACING}>
                                {/* Empty Space */}
                            </Grid>

                            <Grid item xs={1} md={1} lg={1} xl={1}>
                                {/* Empty Space */}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1} md={2} lg={2} xl={3}>
                    {/* Empty Space */}
                </Grid>
            </Grid>
        </div>
    );
}

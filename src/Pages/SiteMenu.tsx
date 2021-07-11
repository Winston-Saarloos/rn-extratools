import React from 'react';
import clsx from 'clsx';

// Material-UI Imports
import MatLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import NotesIcon from '@material-ui/icons/Notes';
import GitHubIcon from '@material-ui/icons/GitHub';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'left';

export default function SiteMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <IconButton color="secondary" aria-label="Open Navigation Menu" onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
                <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem button component={Link} to="/changelog">
                            <ListItemIcon><NotesIcon /></ListItemIcon>
                            <ListItemText primary={'Change Log'} />
                        </ListItem>
                        <ListItem button component={MatLink} href={`https://github.com/Winston-Saarloos/rn-extratools`} target="_blank" rel="noopener">
                            <ListItemIcon><GitHubIcon /></ListItemIcon>
                            <ListItemText primary={'Github Link'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/imagebrowser">
                            <ListItemIcon><PhotoCameraIcon /></ListItemIcon>
                            <ListItemText primary={'Image Browser'} />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disabled button component={Link} to="/signin">
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary={'Login'} />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}
import React from 'react';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useLayout} from "../hooks/useLayout";



const Layout = () => {
    const {isDrawerOpen, toggleDrawer, handleClick} = useLayout();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        Weather
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => handleClick('main')}>Home</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => handleClick('widgets')}>Widgets</ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Layout;
import React, {useState} from 'react';
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


const Layout = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    }

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
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        Weather
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemButton>Home</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Widgets</ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Layout;
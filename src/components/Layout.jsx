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
import { useNavigate } from 'react-router-dom';



const Layout = () => {
    const navigate = useNavigate();

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () =>  {
        setDrawerOpen(prevState => !prevState)
    }

    const handleClick = (path) => {
        navigate(path);
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
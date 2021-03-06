import React from 'react';
import { Toolbar, IconButton, Typography, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const nav = (props) => {
    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon 
                        onClick={() => {
                            (props.navStatus) ? props.setNav(false) : props.setNav(true)
                        }}
                        />
                </IconButton>
                <Typography variant="h6">
                    Chatbot
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default nav;

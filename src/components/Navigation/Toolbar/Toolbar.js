import React from 'react';
import Logo from '../../Logo/Logo';
import classes from  './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolBar;
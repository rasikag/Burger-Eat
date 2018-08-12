import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { NavLink } from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;
import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
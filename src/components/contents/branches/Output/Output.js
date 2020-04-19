import React from 'react';
import classes from './Output.module.css';

const output = props => {
    return(
        <button className={classes.output} >
            <div className={classes.h}>
                {props.name}
            </div>
            <div className={classes.pa}>
                {props.address}
            </div>
        </button>
    );
};

export default output;
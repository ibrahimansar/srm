import React from 'react';
import classes from './Output.module.css';

const output = props => {
    return(
        <div className={classes.output}>
            <h3>
                {props.name}
            </h3>
            <div className={classes.p}>
                {props.address}
            </div>
        </div>
    );
};

export default output;
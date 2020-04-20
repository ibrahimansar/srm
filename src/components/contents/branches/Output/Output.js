import React from 'react';
import classes from './Output.module.css';


const  output = (props) =>{
    return(
        <div className={classes.main}>
            <div className={classes.d1}>
              <img src= {props.photo}/>
            </div>
            <div className={classes.d2}>
                    <h2>{props.name}</h2>
                    <h6>{props.phone}</h6>
                    <h6>{props.street}, </h6>
                    <h6>{props.district}, </h6>
                    <h6>{props.state}</h6>
                </div>
            </div>
    )
}

export default output;
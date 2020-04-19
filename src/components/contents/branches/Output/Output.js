import React,{Component} from 'react';
import classes from './Output.module.css';

class Output extends Component{
    render(){        
        return(
        <button className={classes.output} >
            <div className={classes.h}>
                {this.props.name}
            </div>
            <div className={classes.pa}>
                {this.props.address}
            </div>
        </button>
    );
}   
}
export default Output;
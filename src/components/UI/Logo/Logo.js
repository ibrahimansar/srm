import React from 'react';
import classes from './Logo.module.css';
import Img from '../../../assets/images/p.png';
import ImgM from '../../../assets/images/png.png';


const logo =(props) => (
    <div className={classes.Logo} style={{height: props.height}}>
           <img className={classes.imag} src={Img} />
           <img className={classes.imagM} src={ImgM} />
    </div>
);

export default logo;
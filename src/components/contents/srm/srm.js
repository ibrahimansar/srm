import React from 'react';
import classes from './srm.module.css';
import Slider from './Slider/Slider';
import IMG1 from '../../../assets/images/IMG1.jpg';
import IMG2 from '../../../assets/images/IMG2.jpg';
import IMG3 from '../../../assets/images/IMG3.jpg';
import IMG4 from '../../../assets/images/IMG4.JPG';


const srm =()=>{
return(
     <div className= {classes.cdiv}>

         <Slider slides={images}/> 
         <div className ={classes.para}>    
         <p>Sabura Readymades is a place where we have a lot of good quality cloths</p>
         </div>
     </div>
);
}

const images = [require('../../../assets/images/IMG1.jpg'), require('../../../assets/images/IMG2.jpg'), require('../../../assets/images/IMG3.jpg'), require('../../../assets/images/IMG4.JPG')];

export default srm;

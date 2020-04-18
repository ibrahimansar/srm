import React from 'react';
import classes from './srm.module.css';
import Slider from './Slider/Slider';
import Branches from '../branches/branches'
import IMG1 from '../../../assets/images/IMG1.jpg';
import IMG2 from '../../../assets/images/IMG2.jpg';
import IMG3 from '../../../assets/images/IMG3.jpg';
import IMG4 from '../../../assets/images/IMG4.JPG';


const srm =()=>{
return(
     <div className= {classes.cdiv}>

         <Slider slides={images}/> 
         <div>    
                <p>
                    Sabura Readymades Store is a group of Textile shops where we have a collection of good quality cloths. Our motto is to serve fashions and quality of cloth among our people.
                </p>
         </div>
     </div>
);
}

const images = [require('../../../assets/images/IMG1.jpg'), require('../../../assets/images/IMG2.jpg'), require('../../../assets/images/IMG3.jpg'), require('../../../assets/images/IMG4.JPG')];

export default srm;

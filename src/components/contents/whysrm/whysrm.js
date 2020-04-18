import React from 'react';
import classes from './whysrm.module.css';

const whysrm =()=>{
return(
     <div>
       <h1 className= {classes.cdiv}>Why us!</h1>
       <div className={classes.h6}> 
           <div className={classes.para}>We have the best collection of cloths and creative fashions.</div>
       </div>
       <div className={classes.h6}> 
           <div className={classes.para}>We have experts to know what customer deserve and desire.</div>
       </div>
       <div className={classes.h6}> 
           <div className={classes.para}>We have direct deals with the best brands of clothings.</div>
       </div>
       <div className={classes.h6}> 
           <div className={classes.para}>We have customer's trust as we're serving best as we can.</div>
       </div>
     </div>
);
}

export default whysrm;
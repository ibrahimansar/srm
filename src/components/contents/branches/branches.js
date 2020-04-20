import React, {Component} from 'react';
import classes from './branches.module.css';
import Output from './Output/Output';


class Branches extends  Component{
    state={
        branches: [
            {
                id : '1',
                name: 'Sabura Readymades Store',
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "+91 9791420412",
                photo: require("../../../assets/images/IMG1.jpg")
            },
            {
                id : '2',
                name: "Jameela Garments",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
                
            },
            {
                id: '3',
                name : "Bombay Readymades",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '4',
                name : "Sony Mens and Boys wear",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '5',
                name : "Mens City",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '6',
                name : "Garments City",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '7',
                name : "Fasion City",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '8',
                name : "Safire tex",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            },
            {
                id: '9',
                name : "Hawwa Store",
                street: "Jinna Road-I",
                district:" Tirupattur",
                state: "Tamil Nadu 635601",
                phone: "",
                photo: {}
            }
        ],
    };

    render(){
       const branches = (
            <div>
              {this.state.branches.map((branch, index) => {
                return (
                  <Output
                    name={branch.name}
                    street={branch.street}
                    district={branch.district}
                    state={branch.state}
                    key={branch.id}
                    phone={branch.phone}
                    photo={branch.photo}
                  />
                );
              })}
            </div>
          );
          
            return(    
            <div className={classes.cdiv}>
                <h1>Our branches</h1>
               {branches}
            </div>             
        )

    }
}

export default Branches;
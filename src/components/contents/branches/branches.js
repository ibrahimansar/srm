import React, {Component} from 'react';
import classes from './branches.module.css';
import Output from './Output/Output';

class Branches extends  Component{
    state={
        branches: [
            {
                id : '1',
                name: 'Sabura Readymades Store',
                address: "tpt",
            },
            {
                id : '2',
                name: "Jameela Garments",
                address: "tpt"
            },
            {
                id: '3',
                name : "Bombay Readymades",
                address: "tpt"
            },
            {
                id: '4',
                name : "Sony Mens and Boys wear",
                address: "tpt"
            },
            {
                id: '5',
                name : "Mens City",
                address: "tpt"
            },
            {
                id: '6',
                name : "Garments City",
                address: "tpt"
            },
            {
                id: '7',
                name : "Fasion City",
                address: "tpt"
            },
            {
                id: '8',
                name : "Safire tex",
                address: "tpt"
            },
            {
                id: '9',
                name : "Hawwa Store",
                address: "tpt"
            },

        ]
    };

    render(){
       const branches = (
            <div>
              {this.state.branches.map((branch, index) => {
                return (
                  <Output
                    name={branch.name}
                    address={branch.address}
                    key={branch.id}
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
import React from 'react'

import "./Cockpit.css"

const cockpit = (props) => {

    const style = {
        backgroundColor: "green",
        border: "1px solid blue",
        padding: "8px",
        color: "white"
    };

    const classes = [];
    
    if(props.showPersons){
      style.backgroundColor = "red";
    }

    if (props.persons.length <= 2) {
        classes.push("red");
    }
    if (props.persons.length <= 1) {
        classes.push("bold");
    }

    return ( <div>
        <h1> This is Mohammed Ismail </h1>
        <h6 className={classes.join(" ")} >
         Dynamic Class Example </h6>
        <button style={style}  
           onClick = {props.clicked} > Toggle Person </button>
        </div>

    );
}

export default cockpit;
import React from 'react'
import './Person.css'
// Use function form of component as much as possible !!important
const person = (props) => {
    //              👇 use {} for dynamic content

    const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error("Something went wrong")
    }
    return(
        <div className="Person">
            <p>I'm {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <a href = "javascriopt:;;"
            onClick = {
                props.click
            }><i className = "fa fa-trash-o"
            aria-hidden = "true" ></i> Delete</a>
            
        </div>
    
    )
}

// 👆 function which return a html element




export default person;


// ---- When using class-based components, its this.props -----
/*
class Person extends Component {
    render() {
        return <p>My name is {this.props.name}</p>;
    }
}

*/
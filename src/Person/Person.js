import React from 'react'

const person = (props) => {
    //              👇 use {} for dynamic content
    return(
        <div>
            <p>I'm {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
        </div>
    
    )
}

// 👆 function which return a p element

export default person;


// ---- When using class-based components, its this.props -----
/*
class Person extends Component {
    render() {
        return <p>My name is {this.props.name}</p>;
    }
}

*/
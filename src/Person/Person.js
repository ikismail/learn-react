import React from 'react'

const person = () => {
    //                                  👇 use {} for dynamic content
    return <p>Sample Person and I am {Math.floor(Math.random() * 30)} years old !</p>
}

// 👆 function which return a p element

export default person;
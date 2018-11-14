import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  
  /* State cannot be changed, state can be changed and if it changes and thats the special thing, it only works on that state property, If it changes it will lead react to re-render our dom or to update the dom, 
    eg: if we change the name Mohammed Ismail this will lead to this being re-rendered
  */
  state = {
    persons: [
      {name: 'Mohammed Ismail', age: "24"},
      {name: 'Mohammed Ajmal', age: "23"}
    ]
  }

// Handler will be append for function for handling event
  swithNameHandler = (newName) => {
    // console.log("clicked")

    this.setState({persons: [
      {
        name: newName,
        age: "24"
      }, {
        name: 'Mohammed Ajmal',
        age: "23"
      }
    ]})
  }
  
  /* Every react component has to return or render some html code which can be rendered to the dom to the screen*/
  render() {
    return (
      // Our jsx expression must have one root element for each and every component
      <div className="App">
        <h1>This is Mohammed Ismail</h1>
        < button className = "btn btn-primary"
        onClick = {
          () => this.swithNameHandler('Ismail')
        } > Switch Name </button>
        
        {/* Another Syntax for passing params in function

            onClick={() => this.swithNameHandler('Ismail')}
        */}

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click = {
          this.swithNameHandler.bind(this, 'Ismail')
        }
        >loves JS</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {
          this.swithNameHandler.bind(this, 'Mohammed Ismail')
        }
        ></Person>
      </div>
    );


    // 👆 this jsx html will gets compiled to 👇 this code
   /*  
   return React.createElement('div', {
      className: 'App'
    }, React.createElement('h1', null, 'This is Mohammed Ismail')) 
    
    */
  }
}

export default App;
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  /* State cannot be changed, state can be changed and if it changes and thats the special thing, it only works on that state property, If it changes it will lead react to re-render our dom or to update the dom, 
    eg: if we change the name Mohammed Ismail this will lead to this being re-rendered
  */
  state = {
    persons: [
      { name: "Mohammed Ismail", age: "24" },
      { name: "Mohammed Ajmal", age: "23" }
    ],
    showPersons: false
  };

  // Handler will be append for function for handling event
  swithNameHandler = newName => {
    // console.log("clicked")

    this.setState({
      persons: [
        {
          name: newName,
          age: "24"
        },
        {
          name: "Mohammed Ajmal",
          age: "23"
        }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: "24"
        },
        {
          name: "Mohammed Ajmal",
          age: "23"
        }
      ]
    });
  };

  togglePersons = () => {
    const doesPersonShow = this.state.showPersons;
    this.setState({ showPersons: !doesPersonShow });
  };

  /* Every react component has to return or render some html code which can be rendered to the dom to the screen*/
  render() {
    // inline styles for components
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px",
      color: "blue"
    };

    let persons = null;

    // Checking if the persons will show or not
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={this.nameChangeHandler}
                click={this.swithNameHandler.bind(this, "Mohammed Ismail")}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            
          >
            loves JS
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.swithNameHandler.bind(this, "Mohammed Ismail")}
          /> */}
        </div>
      );
    }

    return (
      // Our jsx expression must have one root element for each and every component
      <div className="App">
        <h1>This is Mohammed Ismail</h1>
        <button
          className="btn btn-primary"
          style={style}
          onClick={this.togglePersons}
        >
          {" "}
          Toggle Person
        </button>

        {/* 👇 injecting the persons object  */}
        {persons}

        {/* Another Syntax for passing params in function
            onClick={() => this.swithNameHandler('Ismail')}
        */}
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

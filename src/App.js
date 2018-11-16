import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
class App extends Component {
  /* State cannot be changed, state can be changed and if it changes and thats
  the special thing, it only works on that state property, If it changes
  it will
   lead react to re-render our dom or to update the dom,
    eg: if we change the name Mohammed Ismail this will lead to this being
    re-rendered
  */
  state = {
    persons: [
      { id: "bzf1", name: "Mohammed Ismail", age: "24" },
      { id: "bzf2", name: "Mohammed Ajmal", age: "23" }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersons = () => {
    const doesPersonShow = this.state.showPersons;
    this.setState({ showPersons: !doesPersonShow });
  };

  /* Every react component has to return or render some html code which can
  be rendered to the dom to the screen*/
  render() {
    // inline styles for components
    const style = {
      backgroundColor: "green",
      border: "1px solid blue",
      padding: "8px",
      color: "white"
    };

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let persons = null;

    // Checking if the persons will show or not
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              < ErrorBoundary key = {
                person.id
              } > < Person
                
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              /></ErrorBoundary >
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

      style.backgroundColor = "red";
    }

    return (
      // Our jsx expression must have one root element for each and every component
      <div className="App">
        <h1>This is Mohammed Ismail</h1>

        <h6 className={classes.join(" ")}>Dynamic Class Example</h6>

        <button style={style} onClick={this.togglePersons}>
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

import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  /* Every react component has to return or render some html code which can be rendered to the dom to the screen*/
  render() {
    return (
      // Our jsx expression must have one root element for each and every component
      <div className="App">
        <h1>This is Mohammed Ismail</h1>
        <Person />
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
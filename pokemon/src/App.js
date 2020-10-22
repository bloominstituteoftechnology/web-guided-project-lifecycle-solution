import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    // initialize data / bind function (if you're not using arrow functions) this runs one time only!
    console.log('Constructor running');
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    console.log('CDM running');
    this.setState({ pokemon: data });
  }

  componentDidUpdate(prevProps, prevState) {
    // CDU checks for changing data, let's us do something based on the data that changed
    console.log('CDU running');
    if (prevProps.userID !== this.props.userID) {
      console.log('Will never run....'); // because we don't have a userID in props :)
      this.fetchUser(this.props.userID);
    }

    if (prevState.pokemon !== this.state.pokemon) {
      // this one will log, because the pokemon property on state will change
      // In here, you could do something with your new data
      console.log('pokemon on state just changed!');
    }
  }

  render() {
    // render ...... renders things! this function can run many times in a component's lifespan
    console.log('rendering App.js');
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;

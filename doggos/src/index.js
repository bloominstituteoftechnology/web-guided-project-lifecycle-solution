import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import './styles.css';

const fetchDogs = (breed) => {
  return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  .then(resp => {
    return(resp);
  })
  .catch(err => console.log('noooo'));
}

class App extends React.Component {
  state = {
    doggos: [],
    currentBreed: 'husky'
  }

  componentDidMount() {
    console.log('CDM');
    fetchDogs(this.state.currentBreed)
      .then(resp => {
        this.setState({
          doggos: resp.data.message
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU running');
    if (prevState.doggos !== this.state.doggos) {
      console.log('doggos have changed');
      if (this.state.currentBreed === 'chihuahua') {
        console.log('ewwww its a chihuahua...');
        fetchDogs("husky")
          .then(resp => {
            this.setState({
              doggos: resp.data.message,
              currentBreed: "husky"
            });
          })
        }
    }
  }

  searchDogs = dogName => {
    fetchDogs(dogName)
      .then(resp => {
        this.setState({
          doggos: resp.data.message,
          currentBreed: dogName
        });
      })
  };

  render() {
    console.log('rendering');
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <SearchForm searchDogs={this.searchDogs}/>
        <div className="doggos">
          {this.state.doggos.map(doggo => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

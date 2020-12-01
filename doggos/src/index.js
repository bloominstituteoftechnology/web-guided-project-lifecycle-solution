import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    doggoText: 'husky'
  }

  componentDidMount() {
    console.log('CDM');
    fetchDogs('husky')
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
      if (this.state.doggoText === 'chihuahua') {
        console.log('ewwww its a chihuahua...');
        fetchDogs("husky")
          .then(resp => {
            this.setState({
              doggos: resp.data.message
            });
          })
        }
    }
  }

  handleChanges = e => {
    this.setState({ doggoText: e.target.value });
  };

  fetchDoggos = e => {
    e.preventDefault();
    fetchDogs(this.state.doggoText)
      .then(resp => {
        this.setState({
          doggos: resp.data.message
        });
      })
  };

  render() {
    console.log('rendering');
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
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

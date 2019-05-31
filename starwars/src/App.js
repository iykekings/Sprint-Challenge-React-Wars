import React, { Component } from 'react';
import StarWars from './components/StarWars';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: '',
      loading: false
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }
  getNext() {
    const next = this.state.next;
    if(!!next) {
      this.getCharacters(next)
    }
  }
  getPrevious() {
    const previous = this.state.previous;
    if(!!previous) {
      this.getCharacters(previous)
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.setState({loading: true})
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        this.setState({next: data.next})
        this.setState({previous: data.previous})
        this.setState({loading: false})
      })
      .catch(err => {
        this.setState({loading: false})
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <StarWars loading={this.state.loading} characters={this.state.starwarsChars} getPrevious={() => this.getPrevious()} getNext={() => this.getNext()} />
      </div>
    );
  }
}

export default App;

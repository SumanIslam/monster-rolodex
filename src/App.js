import React, { Component } from 'react';
// styles
import './App.css';
// components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';




class App extends Component {
  state = { monsters: [], searchField: '' }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
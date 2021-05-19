import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

export default App;

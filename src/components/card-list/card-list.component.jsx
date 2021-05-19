import React, { Component } from 'react'

import { Card } from '../card/card.component'

import './card-list.styles.css'

export class CardList extends Component {
  state = {monsters: []}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const monsters = this.state.monsters.map(monster => (
      <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>
    ))
    return (
      <div className="card-list">
        {monsters}
      </div>
    )
  }
}

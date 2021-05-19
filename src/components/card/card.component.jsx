import React from 'react'

import '../card/card.styles.css'

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set2`} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  ) 
}

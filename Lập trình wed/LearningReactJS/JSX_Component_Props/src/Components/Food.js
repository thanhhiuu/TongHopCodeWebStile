import React from 'react'

function Food(props) {
  return (
    <div>
      <h1>{props.nameFood}</h1>
      <h1>{props.price}</h1>
      <h1>{props.sumMenu}</h1>
    </div>
  )
}

export default Food

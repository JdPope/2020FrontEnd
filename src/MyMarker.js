import React from 'react'

const MyMarker = (props) => {
  return (
    <div>
      <h3>{props.todo.tit}</h3>
      <p>{props.todo.content}</p>
    </div>
  )
}

export default MyMarker

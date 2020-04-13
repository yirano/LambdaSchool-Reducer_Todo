import React from 'react'

const TodoCard = (props) => {
  console.log("TodoCard -> props", props)
  const { task } = props
  return (
    <div>
      <h3>{task.item}</h3>
      <p>{JSON.stringify(task.completed)}</p>
    </div>
  )
}

export default TodoCard;
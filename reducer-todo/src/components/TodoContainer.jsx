import React, { useReducer, useState } from 'react'
import TodoCard from './TodoCard'
import * as red from '../reducer/reducer'
import Form from './Form'

export default function TodoContainer(props) {
  const { reducer, initialState } = red.default;
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState()
  console.log("TodoContainer -> initialState", state)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: input })
  }
  return (
    <>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      {state.tasks.map((task, index) => {
        return (
          <TodoCard task={task} key={index} />
        )
      })}
    </>
  )
}


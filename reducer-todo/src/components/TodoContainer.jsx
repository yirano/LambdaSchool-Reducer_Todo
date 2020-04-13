import React, { Component } from 'react'
import TodoCard from './TodoCard'
import data from '../reducer/reducer'
import Form from './Form'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: data.initialState
    }
  }
  render() {
    const { tasks } = this.state
    return (
      <>
        <Form />
        {tasks.map((task, index) => {
          return (
            <TodoCard task={task} key={index} />
          )
        })}
      </>
    )
  }
}

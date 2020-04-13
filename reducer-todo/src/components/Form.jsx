import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="todo" onChange={props.handleChange} />
      <input type="submit" />
    </form>
  )
}

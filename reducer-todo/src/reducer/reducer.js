import React from 'react'

let initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Mary had a little lamb',
    completed: false,
    id: 2
  },
]

function reducer(state, action) {
  console.log("reducer");
  return state;
}

export default { reducer, initialState }

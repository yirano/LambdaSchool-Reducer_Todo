let initialState = {

  tasks: [
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
}

const reducer = (state, action) => {
  console.log("reducer");
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, { item: action.payload, completed: false, id: Date.now() }] }
    case 'DELETE':
      return { tasks: state.tasks.filter(task => task.id == action.payload) }
    default:
      return state;
  }
}

export default { reducer, initialState }

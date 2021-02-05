const nameFieldReducer = (state = '', action) => {
  switch (action.type) {
    case 'NAMEFIELD':
      return action.name;
    default:
      return state;
  }
}

export default nameFieldReducer;
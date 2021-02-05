const emailFieldReducer = (state = '', action) => {
  switch (action.type) {
    case 'EMAILFIELD':
      return action.email;
    default:
      return state;
  }
}

export default emailFieldReducer;
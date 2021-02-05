const passwordFieldReducer = (state = '', action) => {
  switch (action.type) {
    case 'PASSWORDFIELD':
      return action.pwrd;
    default:
      return state;
  }
}

export default passwordFieldReducer;
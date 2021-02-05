const disableInputRecucer = (state = false, action) => {
  switch (action.type) {
    case 'DISABLEINPUTS':
      return action.disable;
    default:
      return state;
  }
}

export default disableInputRecucer;
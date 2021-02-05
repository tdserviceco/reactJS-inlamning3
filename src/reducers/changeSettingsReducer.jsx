const changeSettingsReducer = (state = false, action) => {
  switch (action.type) {
    case 'CHANGESETTING':
      return action.change;
    default:
      return state;
  }
}

export default changeSettingsReducer;
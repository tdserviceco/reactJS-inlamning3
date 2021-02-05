import nameField from './nameFieldReducer';
import emailField from './emailFieldReducer';
import passwordField from './passwordFieldReducer';
import changeSettings from './changeSettingsReducer';
import disableInputs from './disableInputsReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  nameField: nameField,
  emailField: emailField,
  passwordField: passwordField,
  changeSettings: changeSettings,
  disableInputs: disableInputs
})

export default allReducers
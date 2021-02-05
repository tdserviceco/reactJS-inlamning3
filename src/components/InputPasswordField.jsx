import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { passwordfield } from '../actions'
function InputPasswordField(props) {
  const password = useSelector(state => state.passwordField)
  const readOnly = useSelector(state => state.disableInputs)
  const dispatch = useDispatch();
  return (
    <label htmlFor="password-field">
      <span>Password</span>
      <input id="password-field" readOnly={readOnly ? true : false} className={props.previewClass ? props.previewClass : ''} placeholder="*********" onChange={(e) => dispatch(passwordfield(e.target.value))} type="password" value={password} />
    </label>
  );
}

export default InputPasswordField;
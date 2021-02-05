import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailfield } from '../actions'
function InputEmailField(props) {
  const email = useSelector(state => state.emailField)
  const readOnly = useSelector(state => state.disableInputs)
  const dispatch = useDispatch();
  return (
    <label htmlFor="email-field">
      <span>Email</span>
      <input id="email-field" readOnly={readOnly ? true : false} className={props.previewClass ? props.previewClass : ''} onChange={(e) => dispatch(emailfield(e.target.value))} value={email} type="email" placeholder="Ex: demo@gmail.com" />
    </label>
  );
}

export default InputEmailField;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { namefield } from '../actions'
function InputNameField(props) {
  const name = useSelector(state => state.nameField)
  const readOnly = useSelector(state => state.disableInputs)
  const dispatch = useDispatch();
  return (
    <label htmlFor="name-field">
      <span>Name</span>
      <input id="name-field" readOnly={readOnly ? true : false} className={props.previewClass ? props.previewClass : ''} onChange={(e) => dispatch(namefield(e.target.value))} value={name} placeholder="Ex: Tommy Danielsson" />
    </label>
  );
}

export default InputNameField;
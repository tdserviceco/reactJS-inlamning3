import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { disableinputs } from '../actions'


function SubmitButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToAccount = () => {
    dispatch(disableinputs(true))
    return history.push(`/account`)
  }

  return (
    <button type="submit" onClick={redirectToAccount}>
      Sign me up!
    </button>
  );
}

export default SubmitButton;
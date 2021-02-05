import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputNameField from '../components/InputNameField';
import InputEmailField from '../components/InputEmailField';
import InputPasswordField from '../components/InputPasswordField';
import { disableinputs, changesettings } from '../actions'

function Account(props) {
  const changeSettings = useSelector(state => state.disableInputs);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Your Account!'
  }, [])

  const settingChanges = () => {
    dispatch(disableinputs(false));
    dispatch(changesettings(false));
  }

  const saveSettings = () => {
    dispatch(disableinputs(true));
    dispatch(changesettings(true));
  }

  return (
    <>
      {!changeSettings &&
        <section className="account">
          <div className="header-container">
            <div className="title-header">
              <h2>Welcome</h2>
            </div>
            <div className="subtitle-header">
              <h1>Your account</h1>
            </div>
          </div>
          <InputNameField />
          <InputEmailField />
          <InputPasswordField />
          <button type="button" onClick={saveSettings}>Save</button>
        </section>
      }

      {changeSettings &&
        <section className="change account">
          <div className="header-container">
            <div className="title-header">
              <h2>Welcome</h2>
            </div>
            <div className="subtitle-header">
              <h1>Your account</h1>
            </div>
          </div>
          <InputNameField previewClass='preview' />
          <InputEmailField previewClass='preview' />
          <InputPasswordField previewClass='preview' />
          <button type="submit" onClick={settingChanges}>Change</button>
        </section>
      }
    </>
  );
}
export default Account;
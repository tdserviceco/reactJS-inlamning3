import React, { useEffect } from 'react';
import InputNameField from '../components/InputNameField';
import InputEmailField from '../components/InputEmailField';
import InputPasswordField from '../components/InputPasswordField';
import SubmitButton from '../components/SubmitButton';

function registration(props) {
  useEffect(() => {
    document.title = 'Registration of your new account'
  }, [])

  return (
    <section className="registration">
        <div className="header-container">
          <div className="title-header">
            <h2>Welcome</h2>
          </div>
          <div className="subtitle-header">
            <h2>Registrate your account</h2>
          </div>
        </div>
        <InputNameField />
        <InputEmailField />
        <InputPasswordField />
        <SubmitButton />
    </section>
  );
}

export default registration;
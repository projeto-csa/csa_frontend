import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import fetchLogin from '../fetchLogin';
import validator from './LoginFormValidator';

const LoginForm = (props) => {
  const {
    history,
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const validateAndLogin = async () => {
    const newValidation = validator.validate({
      email,
      password,
    });
    if (newValidation.isValid) {
      const { success, message } = await fetchLogin(email, password);
      if (success) {
        history.push('/');
      } else {
        setErrorMessage(message);
        setValidation(newValidation);
      }
    } else setValidation(newValidation);
  };

  return (
    <form>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {validation.email.isInvalid
          && (
          <div>
            {validation.email.message}
          </div>
          )}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {validation.password.isInvalid
          && (
          <div>
            {validation.password.message}
          </div>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={validateAndLogin}
      >
        Submit
      </button>
      <div>
        { errorMessage }
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(LoginForm);

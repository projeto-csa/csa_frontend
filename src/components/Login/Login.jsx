import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';

const Login = () => (
  <div>
    <LoginForm />
    <Link to="/forgot">
      Esqueci minha senha
    </Link>
  </div>
);

export default Login;

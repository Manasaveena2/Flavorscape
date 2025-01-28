
// // src/components/LoginRegister.js

import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between forms

  const handleToggleForm = () => {
    setIsRegister(!isRegister); // Toggle between Login and Register
  };

  return (
    <div>
      {isRegister ? (
        <Register handleToggleForm={handleToggleForm} />
      ) : (
        <Login handleToggleForm={handleToggleForm} />
      )}
    </div>
  );
};

export default LoginRegister;

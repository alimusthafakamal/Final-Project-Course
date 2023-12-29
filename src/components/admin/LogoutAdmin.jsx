// src/components/Logout.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    // Clear user authentication token or session
    // For example, you might be using localStorage or sessionStorage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    history.push('/admin/login-admin');
  }, [history]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;

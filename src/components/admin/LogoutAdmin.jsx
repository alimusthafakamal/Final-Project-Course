// src/components/Logout.js
import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const LogoutAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user authentication token or session
    // For example, you might be using localStorage or sessionStorage
    localStorage.removeItem('tokenAdmin');

    // Redirect to the login page
    navigate('/admin/login-admin');
  }, [navigate]);
  console.log("navigate", navigate)
  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutAdmin;

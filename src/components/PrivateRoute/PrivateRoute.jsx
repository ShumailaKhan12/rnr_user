import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem('access_token');
  const sessionId = localStorage.getItem('session_id');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // ✅ Block if any of the three is missing
  if (!accessToken || !sessionId || !isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;

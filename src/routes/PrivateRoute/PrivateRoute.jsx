import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthFlow } from '../../UseContext/AuthFlowContext ';

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem('access_token');
  const sessionId = localStorage.getItem('session_id');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const { isAllowed } = useAuthFlow();

  if (!accessToken || !sessionId || !isLoggedIn || !isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;

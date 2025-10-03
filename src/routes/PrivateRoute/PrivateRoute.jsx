// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const accessToken = localStorage.getItem('access_token');
//   const sessionId = localStorage.getItem('session_id');
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


//   if (!accessToken || !sessionId ) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;


import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStatus from '../../hook/useAuthStatus '

const PrivateRoute = () => {

    const { checkUser, isloggedIn } = useAuthStatus()

    if (checkUser) {
        return (
            <div>
              <p>Loading.........</p>
            </div>
        )
    }

    return isloggedIn ?  <Navigate to={"/"} /> :  <Outlet />

}

export default PrivateRoute
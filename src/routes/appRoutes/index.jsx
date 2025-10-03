// // import React from 'react'
// // import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
// // import HowItWorks from '../../pages/how_it_works/HowItWorks';
// // import Home from '../../pages/home/home';
// // import MyReferral from '../../pages/my_Referral/myReferral';
// // import Profile from '../../pages/profile/profile';
// // import UserFaqs from '../../pages/profile/userFaqs';
// // import Progress from '../../pages/progress/progress';
// // import Dummy from '../../pages/dummy/dummy'
// // import Acknowledgement from '../../pages/acknowledgement/acknowledgement';
// // import PageNotFound from '../../pages/pageNotFound/PageNotFound';
// // import PrivateRoute from '../PrivateRoute/PrivateRoute';
// // // import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
// // const AppRoutes = () => {
  
// //   return (
// //     <>
// //       <HashRouter>
// //         <Routes>
// //           <Route path="*" element={<PageNotFound />} />
// //           <Route path="/" element={<Dummy />} />
// //           <Route path="/howitworks" element={<HowItWorks />} />
// //           <Route path="/acknowledge" element={<Acknowledgement />} />      
// //           <Route path="/home"  element={ <PrivateRoute><Home /></PrivateRoute>}/>
// //           <Route path="/myreferral" element={<PrivateRoute><MyReferral /></PrivateRoute>} />
// //           <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
// //           <Route path="/profile-faq" element={<PrivateRoute><UserFaqs /></PrivateRoute>} />
// //           <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
// //         </Routes>
// //       </HashRouter>
// //     </>
// //   );
// // };

// // export default AppRoutes;



import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HowItWorks from '../../pages/how_it_works/HowItWorks';
import Home from '../../pages/home/home';
import MyReferral from '../../pages/my_Referral/myReferral';
import Profile from '../../pages/profile/profile';
import UserFaqs from '../../pages/profile/userFaqs';
import Progress from '../../pages/progress/progress';
import Dummy from '../../pages/dummy/dummy';
import Acknowledgement from '../../pages/acknowledgement/acknowledgement';
import PageNotFound from '../../pages/pageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dummy />} />
        <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/home" element={<Home />} />
          <Route path="/acknowledge" element={<Acknowledgement />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/myreferral" element={<MyReferral />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-faq" element={<UserFaqs />} />
          <Route path="/progress" element={<Progress />} />
        {/* </Route> */}
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;


// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const allowedPaths = ["/", "/about", "/dashboard"]; // routes only accessible via button click

// function ProtectedRoute({ children }) {
//   const location = useLocation();
//   const [isAllowed, setIsAllowed] = useState(false);

//   useEffect(() => {
//     // Check if user came from a click (we set flag in sessionStorage)
//     const navigationAllowed = sessionStorage.getItem("allowNavigation");
//     if (navigationAllowed === "true" && allowedPaths.includes(location.pathname)) {
//       setIsAllowed(true);
//       sessionStorage.removeItem("allowNavigation"); // reset after entering
//     } else {
//       setIsAllowed(false);
//     }
//   }, [location]);

//   return isAllowed ? children : <Navigate to="/" replace />;
// }

// function AppRoutes() {
//   const navigate = useNavigate()
//   const handleNavigate = (path) => {
//     sessionStorage.setItem("allowNavigation", "true"); // allow next navigation
//     // window.location.href = path;
//     navigate(path)
    
//   };

//   return (
//     <>
//       <button onClick={() => handleNavigate("/about")}>Go to About</button>
//       <button onClick={() => handleNavigate("/dashboard")}>Go to Dashboard</button>

//       <Routes>
//         <Route path="/" element={<h1>Home</h1>} />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <h1>About Page</h1>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <h1>Dashboard</h1>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default AppRoutes;
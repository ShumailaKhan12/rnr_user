import React, { useContext, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import './styles/_common.scss';
import './styles/_mixins.scss';
import './styles/_function.scss';
import './styles/_variables.scss';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AppRoutes from './routes/appRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './UseContext/useContext';
import { postData } from './services/api';
import {  BrowserRouter as Router } from 'react-router-dom';
// import { AuthFlowProvider } from './UseContext/AuthFlowContext ';
// import HowItWorks from './pages/HowItWorks';
// import Home from './pages/home/home';

function App() {
  const { accessToken, sessionId, userData, setUserData ,ContextHomeDataAPI } = useContext(UserContext);
  // console.log('ContextHomeDataAPI: ', ContextHomeDataAPI);
  // console.log("accessToken", accessToken)
  // console.log("sessionid", sessionId)
  // console.log("Progess", userData)


  const [progressData, setProgressData] = useState(null);

  // console.log(progressData)
  
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        if (ContextHomeDataAPI.user_data?.Id) {
          const response = await postData(`referral_program/progress/${ContextHomeDataAPI.user_data?.Id}`, {});
          console.log("API Response:", response);

          setProgressData(response);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchUserProgress();
  }, [userData]);
  return (
    <>
     <ToastContainer />
    {/* <AuthFlowProvider> */}
       {/* <Router> */}
         <AppRoutes />
       {/* </Router> */}
    {/* </AuthFlowProvider> */}
    </>
  )
}

export default App

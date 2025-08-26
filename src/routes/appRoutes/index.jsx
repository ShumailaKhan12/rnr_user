import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HowItWorks from '../../pages/HowItWorks';
import Home from '../../pages/home/home';
import MyReferral from '../../pages/my_Referral/myReferral';

const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
             <Route path="/" element={<HowItWorks />} />
             <Route path="/home" element={<Home />} />
             <Route path="/myreferral" element={<MyReferral />} />

        </Routes>
    </Router>
    </>
  );
};

export default AppRoutes;
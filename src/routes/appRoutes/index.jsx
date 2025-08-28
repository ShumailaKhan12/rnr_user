import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowItWorks from '../../pages/how_it_works/HowItWorks';
import Home from '../../pages/home/home';
import MyReferral from '../../pages/my_Referral/myReferral';
import Profile from '../../pages/profile/profile';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myreferral" element={<MyReferral />} />
             <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
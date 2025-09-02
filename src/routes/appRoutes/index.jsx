import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowItWorks from '../../pages/how_it_works/HowItWorks';
import Home from '../../pages/home/home';
import MyReferral from '../../pages/my_Referral/myReferral';
import Profile from '../../pages/profile/profile';
import UserFaqs from '../../pages/profile/userFaqs';
import Progress from '../../pages/progress/progress';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myreferral" element={<MyReferral />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-faq" element={<UserFaqs />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
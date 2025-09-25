import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import HowItWorks from '../../pages/how_it_works/HowItWorks';
import Home from '../../pages/home/home';
import MyReferral from '../../pages/my_Referral/myReferral';
import Profile from '../../pages/profile/profile';
import UserFaqs from '../../pages/profile/userFaqs';
import Progress from '../../pages/progress/progress';
import Dummy from '../../pages/dummy/dummy'
import Acknowledgement from '../../pages/acknowledgement/acknowledgement';
const AppRoutes = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/acknowledge" element={<Acknowledgement />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myreferral" element={<MyReferral />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-faq" element={<UserFaqs />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRoutes;
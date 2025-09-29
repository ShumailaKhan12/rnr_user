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
import PageNotFound from '../../pages/pageNotFound/PageNotFound';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
const AppRoutes = () => {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HowItWorks />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/acknowledge" element={<Acknowledgement />} />


          <Route path="/home"  element={ <PrivateRoute><Home /></PrivateRoute>}/>
          <Route path="/myreferral" element={<PrivateRoute><MyReferral /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/profile-faq" element={<PrivateRoute><UserFaqs /></PrivateRoute>} />
          <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRoutes;

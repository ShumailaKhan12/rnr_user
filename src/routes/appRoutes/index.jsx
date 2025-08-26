import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HowItWorks from '../../pages/HowItWorks';
import Home from '../../pages/home/home';

const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
             <Route path="/" element={<HowItWorks />} />
             <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
    </>
  );
};

export default AppRoutes;
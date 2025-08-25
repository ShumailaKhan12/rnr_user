import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import './styles/_common.scss';
import './styles/_mixins.scss';
import './styles/_function.scss';
import './styles/_variables.scss';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HowItWorks from './pages/HowItWorks';
import Home from './pages/home/home';

function App() {

  return (
    <>
    <Home/>
    <HowItWorks />
    </>
  )
}

export default App

  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import DividerSection from './components/DividerSection/Divider.jsx';
  import './App.css';
import Divider from './components/DividerSection/Divider.jsx';
import StudyWithMe from './components/Section2/Section2.jsx';

function App() {

  return (
    <>
        {/* <h1>Teacher Platform</h1> */}
      <Navbar />
      <HeroSection/>
      {/* <Divider/> */}
      <StudyWithMe/>

        
    </>
  )
}

  export default App

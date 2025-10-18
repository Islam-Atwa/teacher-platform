  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg';

import Navbar from './components/Navbar/Navbar.jsx'; // NavBar 0
import HeroSection from './components/HeroSection/HeroSection.jsx'; //Hero Section 1
import WhyUs from './components/Section2/WhyUs.jsx';



import DividerSection from './components/DividerSection/Divider.jsx';
  import './App.css';
import Divider from './components/DividerSection/Divider.jsx';
import StudyMatrials from './components/StudyMatrials/StudyMatrials.jsx';
import CourseSection from './components/CourseSection/Course.jsx';
import AcademicStages from './components/AcademicStages/AcademicStages.jsx';
import Footer from './components/FooterSection/Footer.jsx';

// import {useTheme} from './context/ThemeContext.jsx'
function App() {
  // const { isDark, toggleTheme } = useTheme();


  return (
    <>
        {/* <h1>Teacher Platform</h1> */}
      <Navbar />
      <HeroSection/>
      {/* <Divider/> */}
      <WhyUs/>
      <StudyMatrials/>
      <CourseSection/> 
      <AcademicStages/>
      <Footer/>
        
    </>
  )
}

  export default App

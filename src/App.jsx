  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg';

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {Navbar} from './components/Navbar/Navbar.jsx'; // NavBar 0
import HeroSection from './components/HeroSection/HeroSection.jsx'; //Hero Section 1
import WhyUs from './components/Section2/WhyUs.jsx';

import courseData from './components/CourseSection/CourseData.js'

import DividerSection from './components/DividerSection/Divider.jsx';
  import './App.css';
import Divider from './components/DividerSection/Divider.jsx';
import StudyMatrials from './components/StudyMatrials/StudyMatrials.jsx';
import CourseSection from './components/CourseSection/Course.jsx';
import AcademicStages from './components/AcademicStages/AcademicStages.jsx';
import {Footer} from './components/FooterSection/Footer.jsx';
import {CoursePage} from './components/pages/CoursePage.jsx'; 
import { Layout } from './components/Layout/Layout.jsx';
import { HomePage } from './components/pages/HomePage.jsx';

// import {useTheme} from './context/ThemeContext.jsx'


export const App =()=> {
  const Routing = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
      children:[
        {index: true, element:<HomePage/>},
        {path: "/course/:id", element:<CoursePage/>}
      ]
    }
  ]);


  return <RouterProvider router={Routing}></RouterProvider>
};

  export default App

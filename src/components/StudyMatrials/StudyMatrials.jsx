// import React from 'react';
// import styled from 'styled-components';
// import './section2.css';

// import fxIcon from '../StudyMatrials/fxIcon.webp';
import { useTheme } from '../Context/ThemeContext';
import IntegralIcon from '../StudyMatrials/IntegralIcon.webp';

import './StudyMatrials.css';


const StudyMatrials = () => {
  const {darkMode} = useTheme();
  return (
    <section className={`marquee  mx-auto px-8 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"} `}>
      <h1 className="max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        المواد{" "}
        <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
          الدراسية
        </span>
      </h1>
      <div className="">
      <div className="marquee__inner mb-8">
  <div className={`marquee__group  `}>
    {/* تفاضل */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-emerald-500 to-teal-600 
            text-white shadow-md ${darkMode ? "bg-gray-900 text-white" : ""}`}
      >
        تفاضل
      </span>
    </div>

    {/* تكامل */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-blue-500 to-purple-600 
          text-white shadow-md`}
      >
        تكامل
      </span>
    </div>

    {/* جبر */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-pink-500 to-rose-600 
          text-white shadow-md`}
      >
        جبر
      </span>
    </div>
  </div>

  <div className="marquee__group">
    {/* هندسة */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-orange-500 to-red-600 
          text-white shadow-md`}
      >
        هندسة
      </span>
    </div>

    {/* إستاتيكا */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-cyan-500 to-blue-600 
          text-white shadow-md`}
      >
        إستاتيكا
      </span>
    </div>

    {/* ديناميكا */}
    <div className="parent">
      <span
        className={`text-3xl font-extrabold rounded-2xl p-1.5 px-4 
          bg-gradient-to-br from-violet-500 to-fuchsia-600 
          text-white shadow-md`}
      >
        ديناميكا
      </span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}


export default StudyMatrials;

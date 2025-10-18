// import React from 'react';
// import styled from 'styled-components';
// import './section2.css';

// import fxIcon from '../StudyMatrials/fxIcon.webp';
import IntegralIcon from '../StudyMatrials/IntegralIcon.webp';

import './StudyMatrials.css';

const StudyMatrials = () => {
  return (
    <section className="marquee  mx-auto px-8 ">
      <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        المواد{" "}
        <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
          الدراسية
        </span>
      </h1>
      <div className="">
        <div className="marquee__inner">
          <div className="marquee__group ">
            <div className="parent ">
              <span className='text-indigo-700 text-3xl font-extrabold bg-gray-100 rounded-4xl p-1.5 px-4' >تفاضل</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
            <div className="parent text-white">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>تكامل</span>
              {/* <img col src={IntegralIcon} alt="Icon"  /> */}
            </div>
            <div className="parent">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>جبر</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
          </div>
          <div className="marquee__group">
            <div className="parent">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>هندسة</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
            <div className="parent">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>إستاتيكا</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
            <div className="parent">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>ديناميكا</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
            <div className="parent">
              <span className='text-indigo-700 text-3xl font-extrabold bg-white rounded-4xl p-1.5 px-4'>إحصاء</span>
              {/* <img src={fxIcon} alt="" srcset="" /> */}
            </div>
            {/* <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


export default StudyMatrials;

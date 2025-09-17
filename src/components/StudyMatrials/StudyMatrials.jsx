// import React from 'react';
// import styled from 'styled-components';
// import './section2.css';

import fxIcon from '../StudyMatrials/fxIcon.webp';
import IntegralIcon from '../StudyMatrials/IntegralIcon.webp';

import './StudyMatrials.css';

const StudyMatrials = () => {
  return (
      <div className="marquee">
        <h2 className="container mx-auto px-4 marquee_header">المواد الدراسية</h2>
        <div className="marquee__inner">
          <div className="marquee__group">

            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
            <div className='parent'>
              <span>تكامل</span>
              <img col src={IntegralIcon} alt="Icon"  />
            </div>
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
          </div>
          <div className="marquee__group">
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
            <div className='parent'>
              <span>تفاضل</span>
              <img src={fxIcon} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
  );
}


export default StudyMatrials;

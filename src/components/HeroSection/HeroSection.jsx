  import React, { lazy } from 'react';
  import '../HeroSection/hero.css';
  import student3 from '../HeroSection/student3.png';

  import {useRef } from 'react'; 
  import { Player } from '@lordicon/react'; // lordion libraary for animatin Icon
  import bookIcon from '../HeroSection/bookAnimate3.json';
  import  wave  from "../HeroSection/wave.svg";



  function HeroSection() {
    const playerRef  = useRef(null);    
    return (
      <section className="hero">
        <div className="mx-auto px-4 your-section-class px-4 mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-8 
                  !mb-0 !pb-0 py-8 lg:py-16">
          {/* Text */}
          <div className="flex flex-col justify-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          أ. إبراهيم عطوه
        </h1>
        <p className="mb-8 text-lg lg:text-xl">
          اضمن الدرجة الكاملة في مواد الرياضيات في الثانوية العامة مع أ. احمد الفواخري و انضم للاوائل مع اقوى نظام متابعة و شروحات و تمارين على المادة
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
          <button className="inline-flex justify-left gap-3 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900 icon-Book"
            onMouseEnter ={()=>{
              playerRef.current?.play();
            }}
            onMouseLeave={()=>{
              playerRef.current?.pause();
              playerRef.current?.goToFirstFrame();
            }}
          >ابدأ قصة نجاحك 
          <Player
            ref={playerRef}
            icon={bookIcon}
            loading={lazy}
            
            loop
          />
              
          </button>
          {/* Social Icon */}
          <div class="flex justify-center items-center gap-2.5 social-icon">
      <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
      <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
    </svg>
  </a>

  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.5.6a2.9 2.9 0 0 0-2 2.1A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2.1c2.3.6 9.5.6 9.5.6s7.2 0 9.5-.6a2.9 2.9 0 0 0 2-2.1A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  </a>

  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.993 15.924 9.82 19.52c.361 0 .518-.155.706-.34l1.694-1.637 3.514 2.578c.645.356 1.107.17 1.28-.597l2.32-10.89c.236-1.059-.383-1.47-1.024-1.214L3.64 11.205c-1.043.419-1.03 1.004-.178 1.27l4.96 1.55 7.632-4.816c.36-.239.688-.106.418.153l-6.48 5.562z"/>
    </svg>
  </a>
          </div>
        </div>
          </div>
            {/* Image */}
          <div className='student-container'>
        <img className='student3' src={student3} alt="student" />
          </div>
        </div>
        <img src={wave} alt="wave swction" className='m-0 p-0 relative top-0' />
        </section>
    );
  }

  export default HeroSection;
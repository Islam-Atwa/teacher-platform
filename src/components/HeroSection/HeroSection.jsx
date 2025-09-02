  import React, { lazy } from 'react';
  import '../HeroSection/hero.css';
  import student3 from '../HeroSection/student3.png';

  import {useRef } from 'react'; 
  import { Player } from '@lordicon/react'; // lordion libraary for animatin Icon
  import bookIcon from '../HeroSection/bookAnimate3.json';



  function HeroSection() {
    const playerRef  = useRef(null);    
    return (
      <section className="hero ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 bg-transparent small-screen">
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
            c
            loop
          />
              
          </button>
          <div className="py-3 px-5 sm:ms-4 text-sm font-medium">
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>

          </div>
        </div>
      </div>
      <div className='student-container'>
        <img className='student3' src={student3} alt="student" />
      </div>
    </div>
      </section>
    );
  }

  export default HeroSection;
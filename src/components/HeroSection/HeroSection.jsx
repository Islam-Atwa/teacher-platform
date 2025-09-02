  import React, { lazy } from 'react';
  import '../HeroSection/hero.css';
  import student3 from '../HeroSection/student3.png';

  import {useRef } from 'react'; 
  import { Player } from '@lordicon/react'; // lordion libraary for animatin Icon
  import bookIcon from '../HeroSection/bookAnimate3.json';



  function HeroSection() {
    const playerRef  = useRef(null);    
    return (
      <section className="hero">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 bg-transparent small-screen">
      <div class="flex flex-col justify-center">
        <h1 class="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          أ. إبراهيم عطوه
        </h1>
        <p class="mb-8 text-lg lg:text-xl">
          اضمن الدرجة الكاملة في مواد الرياضيات في الثانوية العامة مع أ. احمد الفواخري و انضم للاوائل مع اقوى نظام متابعة و شروحات و تمارين على المادة
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
          <button class="inline-flex justify-left gap-3 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900 icon-Book"
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
            <a
              href="#"
              class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Learn more
            </a>
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
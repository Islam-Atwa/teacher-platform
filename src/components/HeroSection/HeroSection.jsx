import React from 'react';
import '../HeroSection/hero.css';
// import student from '../HeroSection/student.svg';
// import student2 from '../HeroSection/student2.png';
import student3 from '../HeroSection/student3.png';
// import bgmath from '../HeroSection/bgmath.png';
// import logo from '../Navbar/logo.png';


function HeroSection() {
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
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
           ابدأ قصة نجاحك 
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
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

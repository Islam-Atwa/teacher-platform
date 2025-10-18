import React, { lazy, useRef } from 'react';
import '../HeroSection/hero.css';
import student3 from '../HeroSection/student3.png';
import { Player } from '@lordicon/react';
import bookIcon from '../HeroSection/bookAnimate3.json';
import {useTheme} from '../Context/ThemeContext'

// import wave from "../HeroSection/wave.svg";

function HeroSection() {
  const playerRef = useRef(null);

  const handleClick = () => {
    playerRef.current?.play();
  };
  

  const handleHover = () => {
    playerRef.current?.pause();
    playerRef.current?.goToFirstFrame();
  };

  const {darkMode} = useTheme();
  return (
    <section className={`hero ${darkMode ? "bg-gray-900 text-white h-full" : "bg-gray-200"}`}>
      <div
        className="mx-auto px-12 grid grid-cols-1 md:text-center lg:grid-cols-2 lg:text-start gap-8
                   max-w-7xl max-w-screen-xl !mb-0 !pb-0 py-8 lg:py-16 "
      >
        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 lg:text-start justify-center md:justify-center lg:justify-start">
            <span className="font-bold text-4xl md:text-5xl lg:text-6xl">
              أ.
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
              إبراهيم عطوة
            </h1>
          </div>

          <p className="mb-8 text-lg lg:text-xl max-w-md text-gray-700 mx-auto md:mx-auto lg:mx-0">
            إبدأ قصة نجاحك مع أستاذ إبراهيم عطوة
            <br />
            واحصل علي الدرجة النهائية في مواد الرياضيات مع شرح مبسط وأقوي نظام
            متابعه
          </p>

          {/* CTA Button */}
          <div className="flex sm:flex-row sm:space-y-0 justify-center md:justify-center lg:justify-start">
            <div
              className="flex items-center justify-between bg-indigo-600 text-white font-semibold py-2 px-3 rounded-3xl shadow-md cursor-pointer hover:bg-indigo-700 transition duration-300 ease-in-out"
              onMouseEnter={handleClick}
              onMouseLeave={handleHover}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg tracking-wide">
                  ابدأ قصة نجاحك الآن
                </span>
                <i className="book bg-gray-100 rounded-full p-1.5 shadow-md flex items-center justify-center">
                  <Player ref={playerRef} icon={bookIcon} loading={lazy} loop />
                </i>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mb-8 mt-6 flex flex-col items-center justify-center lg:justify-start mt-8 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            <span className="text-center lg:text-start">
              تابعنا علي منصات التـــواصل
            </span>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.5.6a2.9 2.9 0 0 0-2 2.1A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2.1c2.3.6 9.5.6 9.5.6s7.2 0 9.5-.6a2.9 2.9 0 0 0 2-2.1A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.993 15.924 9.82 19.52c.361 0 .518-.155.706-.34l1.694-1.637 3.514 2.578c.645.356 1.107.17 1.28-.597l2.32-10.89c.236-1.059-.383-1.47-1.024-1.214L3.64 11.205c-1.043.419-1.03 1.004-.178 1.27l4.96 1.55 7.632-4.816c.36-.239.688-.106.418.153l-6.48 5.562z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div
            className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
            data-v-38949684=""
          >
            <div
              className="flex items-center gap-2 px-2 py-1 text-black bg-white rounded-full shadow-md backdrop-blur-sm"
              data-v-38949684=""
            >
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                data-v-38949684=""
              ></div>
              <span
                className="text-sm font-medium text-gray-950"
                data-v-38949684=""
              >
                دراسة تفاعلية مذهلة ✨
              </span>
            </div>

            <div
              className="flex items-center gap-2 px-2 py-1 bg-white rounded-full shadow-md backdrop-blur-sm"
              data-v-38949684=""
            >
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                data-v-38949684=""
              ></div>
              <span
                className="text-sm font-medium text-gray-950"
                data-v-38949684=""
              >
                محتوى عالي الجودة 🎯
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-2 py-1 bg-white rounded-full shadow-md backdrop-blur-sm"
              data-v-38949684=""
            >
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                data-v-38949684=""
              ></div>
              <span
                className="ttext-sm font-medium text-gray-950"
                data-v-38949684=""
              >
                دعم متواصل💪
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="student-container flex justify-center md:justify-center lg:justify-end">
          <img className="student3" src={student3} alt="student" />
        </div>
      </div>

      {/* Wave (اختياري) */}
      {/* <img src={wave} alt="wave section" className="m-0 p-0 relative top-0" /> */}
    </section>
  );
}

export default HeroSection;

import React from "react";
import courseData from "../CourseSection/CourseData";
import { useTheme } from "../Context/ThemeContext";
import { Link } from 'react-router-dom';

// import {Br}

const Course = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`${
        darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-50 text-gray-900"
      } h-full transition-colors duration-500 `}
    >
      <div className="mx-auto px-8">
        <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-2xl font-bold">
          أحدث{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
            الكورسات
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mr-6 cursor-pointer">
          {courseData.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className={`rounded-lg border p-4 mb-12 shadow-sm transition-all hover:shadow-lg sm:p-6 flex flex-col overflow-hidden 
                ${
                  darkMode
                    ? "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-600"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                }`}
            >
              {/* Image */}
              <img
                className="w-full rounded-xl object-cover"
                src={course.img}
                alt={course.description}
              />

              {/* Card content */}
              <div className="w-full h-44 object-cover">
                {/* Stage */}
                <div className="flex items-center mt-3 gap-2">
                  <img
                    className={`w-6 h-6 object-contain transition ${
                      darkMode ? "invert brightness-200" : ""
                    }`}
                    src={course.icon}
                    alt=""
                  />
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    الصف الثالث الثانوي
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>

                {/* Description */}
                <p
                  className={`text-sm mb-1 flex-grow ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {course.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <button
                    className={`mb-3 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 mt-2
                      ${
                        darkMode
                          ? "bg-gray-700 text-gray-200 hover:bg-indigo-600 hover:text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-indigo-600 hover:text-white"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`}
                  >
                    تفاصيل الكورس
                  </button>

                  <div className="py-2 px-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mt-2 flex items-center gap-2">
                    <span className="font-bold text-gray-900 bg-white px-2 rounded-2xl text-sm">
                      {course.price}
                    </span>
                    <span className="text-sm text-white">جنية</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;

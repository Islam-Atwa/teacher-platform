import React from "react";

import courseData from '../CourseSection/CourseData';
import {useTheme} from '../Context/ThemeContext'


const Course = () =>{
    const {darkMode} = useTheme();

    return(
        <section className={`${darkMode ? "bg-gray-900 text-white h-full" : "bg-gray-200"}`}>
            <div className=" mx-auto px-8">
                <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">أحدث <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">الكورسات</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mr-6">
                    {/* container per card */}
                    {courseData.map((course)=>(
                        <div
                            key={course.id}
                            className="bg-white-100 p-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col" >
                        <img 
                            className="w-full rounded-xl object-cover"
                            src={course.img} alt={course.description}  
                        />
                        {/* text Card */}
                        <div className="w-full h-44 object-cover">
                            <div className="flex items-center academic-stages mt-3 ">
                                <img className="w-6 h-6 object-contain" src={course.icon}  srcset="" />
                                <span className="fml-2 items-center">الصف الثالث الثانوي</span>
                            </div>
                            <h3 className="mt-4 text-lg font-bold">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">{course.description}</p>
                            {/* Price And Button */}
                            <div className="flex items-center justify-between ">
                                <button className="mb-3 px-4 py-2 rounded-2xl border-1 border-blue-600 text-black-100 transition-colors  duration-200 mt-2 hover:bg-indigo-600 hover:text-white  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                                    تفاصيل الكورس
                                </button>
                                <div className="py-2 px-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mt-2 flex items-center gap-2">
                                <span className="font-bold text-gray-800 bg-white px-2 rounded-2xl">{course.price}</span>
                                <span className="">جنية</span>

                                </div>
                            </div>
                        </div>
                        </div>
                        
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default Course




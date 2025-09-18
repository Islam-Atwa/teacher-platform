import React from "react";
import test from '../CourseSection/test.jpg';
import courseData from '../CourseSection/CourseData';

const Course = () =>{
    return(
        <section>
            <div className="container mx-auto px-4 mt-10">
                <h2 className="section-title">أحدث الكورسات</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* container per card */}
                    <div className="bg-white-100 p-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col" >
                        <img className="w-full rounded-xl object-cover" src={test} alt=""  
                        />
                        {/* text Card */}
                        <div className="w-full h-44 object-cover">
                            <h3 className="mt-4 text-lg font-bold">كورس الأساسيات</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">كورس هيراجع معاك علي اساسيات الرياضيات</p>
                            {/* Price And Button */}
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-green-600 font-bold text-base">100 جنيه</span>
                                <button class="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg
                                    border-blue-600
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    تفاصيل الكورس
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white-100 p-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col" >
                        <img className="w-full rounded-xl object-cover" src={test} alt=""  
                        />
                        {/* text Card */}
                        <div className="w-full h-44 object-cover">
                            <h3 className="mt-4 text-lg font-bold">كورس الأساسيات</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">كورس هيراجع معاك علي اساسيات الرياضيات</p>
                            {/* Price And Button */}
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-green-600 font-bold text-base">100 جنيه</span>
                                <button class="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg
                                    border-blue-600
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    تفاصيل الكورس
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white-100 p-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col" >
                        <img className="w-full rounded-xl object-cover" src={test} alt=""  
                        />
                        {/* text Card */}
                        <div className="w-full h-44 object-cover">
                            <h3 className="mt-4 text-lg font-bold">كورس الأساسيات</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">كورس هيراجع معاك علي اساسيات الرياضيات</p>
                            {/* Price And Button */}
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-green-600 font-bold text-base">100 جنيه</span>
                                <button class="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg
                                    border-blue-600
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    تفاصيل الكورس
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white-100 p-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col" >
                        <img className="w-full rounded-xl object-cover" src={test} alt=""  
                        />
                        {/* text Card */}
                        <div className="w-full h-44 object-cover">
                            <h3 className="mt-4 text-lg font-bold">كورس الأساسيات</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">كورس هيراجع معاك علي اساسيات الرياضيات</p>
                            {/* Price And Button */}
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-green-600 font-bold text-base">100 جنيه</span>
                                <button class="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg
                                    border-blue-600
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    تفاصيل الكورس
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Course




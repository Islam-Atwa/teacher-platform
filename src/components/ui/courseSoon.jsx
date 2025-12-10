
import React from "react";
import soonImage from '../../assets/soon.png';
import courseMetadata from '../../data/CourseData.js';

const CourseSoon = () => {
    return (
        <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4 text-start"></h2>
            <img src={soonImage} alt="Coming Soon" className="mx-auto mb-6 w-120 h-80"/>
            <h2 className="text-3xl font-bold mb-4">الكورس قادم قريباً!</h2>
            <p className="text-lg text-gray-600">نحن نعمل بجد لإطلاق هذا الكورس في أقرب وقت ممكن. ترقبوا المزيد من التفاصيل قريباً!</p>
        </div>
    )
}
export {CourseSoon};
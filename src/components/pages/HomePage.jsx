import React from "react";

// Import Components
import HeroSection from "../HeroSection/HeroSection";
import WhyUs from "../Section2/WhyUs";
import StudyMatrials from "../StudyMatrials/StudyMatrials";
import Course from "../CourseSection/Course";
import AcademicStages from "../AcademicStages/AcademicStages";

export const HomePage=()=>{
    return(
        <>
            <HeroSection/>
            <WhyUs/>
            <StudyMatrials/>
            <Course/>
            <AcademicStages/>
        </>
    )
}
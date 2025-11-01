import React from 'react';
import {Link, Outlet} from 'react-router-dom';


export const CoursePage = ()=>{
    return(
        <div>
            <h1 >Course Page</h1>
            <h1>Course Page</h1>
            <h1>Course Page</h1>
            <h1>Course Page</h1>
            <Link to="/" >CoursePge</Link>
            <Outlet></Outlet>


        </div>
        
    )
}
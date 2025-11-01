import React from 'react';
import { Outlet } from "react-router-dom";

import {Navbar} from  '../Navbar/Navbar';
import {Footer} from  '../FooterSection/Footer';

export const Layout= ()=>{
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
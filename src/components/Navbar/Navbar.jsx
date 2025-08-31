import React from "react";
import "./Navbar.css"; // ملف التنسيق
import logo from '../Navbar/logo.png'; // تأكد من مسار الصورة

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navBar">
            <div className="container">
                <div className="d-flex align-items-center">
                    <a
                        className="navbar-brand d-flex justify-content-center gap-3 align-items-center"
                        href="#"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            width="50"
                            height="50"
                            className="d-inline-block align-text-top"
                        />
                        الأستاذ
                    </a>

                    {/* زرار الموبايل */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* عناصر الناف بار */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center">

                        {/* Dropdown واحد */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                الصفوف الدراسية
                            </a>
                            <ul className="dropdown-menu text-end dropdown-menu-end ">
                                {/* المرحلة الإعدادية */}
                                    <li><h6 className="dropdown-header">المرحلة الإعدادية</h6></li>
                                    <li><a className="dropdown-item" href="#">الصف الأول الإعدادي</a></li>
                                    <li><a className="dropdown-item" href="#">الصف الثاني الإعدادي</a></li>
                                    <li><a className="dropdown-item" href="#">الصف الثالث الإعدادي</a></li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li><h6 className="dropdown-header">المرحلة الثانوية</h6></li>
                                    <li><a className="dropdown-item" href="#">الصف الأول الثانوي</a></li>
                                    <li><a className="dropdown-item" href="#">الصف الثاني الثانوي</a></li>
                                    <li><a className="dropdown-item" href="#">الصف الثالث الثانوي</a></li>


                                {/* المرحلة الثانوية */}
                            </ul>
                        </li>

                        {/* مثال على عنصر إضافي */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>

                        {/* Dark Mode */}
                        <li className="nav-item ms-lg-3">
                            <button className="btn btn-outline-dark">Dark Mode</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

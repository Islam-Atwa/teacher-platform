import React from "react";
import "./Navbar.css";
import logo from "../Navbar/logo.png";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-white-900 dark:border-gray-700 fixed w-full nav-shadow z-index">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex gap-5 items-center space-x-8 rtl:space-x-reverse">
      <img
        src={logo}
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
        الأستاذ
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-multi-level"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"
      aria-controls="navbar-multi-level"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex gap-4 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">

        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:hover:bg-white-700 md:dark:hover:bg-transparent"
          >
            الصفوف الدراسية {""}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownNavbar"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-white-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownLargeButton"
            >
              <li aria-labelledby="dropdownNavbarLink" id="accordion-collapse1" data-accordion="collapse1">
                <button
                  id="accordion-collapse-heading-1"
                  // id="doubleDropdownButton1"
                  data-accordion-target="#accordion-collapse-body-1"
                  data-dropdown-placement="right-start"
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 dark:hover:text-black"
                >
                  المرحلة الإعدادية 
                  <svg
                    svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                    className="w-2.5 h-2.5 ms-2.5"
                    // aria-hidden="true"
                    // xmlns="http://www.w3.org/2000/svg"
                    // fill="none"
                    // viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-collapse-body-1"
                  aria-labelledby="accordion-collapse-heading-1"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-white-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-black-200"
                    aria-labelledby="accordion-collapse-body-1"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 black:text-gray-200 dark:hover:text-black"
                      >
                        الصف الأول الإعدادي
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 black:text-gray-200 text-black"
                      >
                        الصف الثاني الإعدادي
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 black:text-black dark:hover:text-black"
                      >
                        الصف الثالث الإعدادي
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-labelledby="dropdownNavbarLink" id="accordion-collapse2" data-accordion="collapse2">
                <button
                  id="accordion-collapse-heading-2"
                  // id="doubleDropdownButton1"
                  data-accordion-target="#accordion-collapse-body-2"
                  data-dropdown-placement="right-start"
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 dark:hover:text-black"
                >
                  المرحلة الثانوية  
                  <svg
                      data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-collapse-body-2"
                  aria-labelledby="accordion-collapse-heading-2"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-white-700"
                  >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-black-200"
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 black:hover:bg-white-600 black:text-gray-200 black:hover:text-black"
                      >
                        الصف الأول الثانوي
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 dark:text-black-200 dark:hover:text-black"
                      >
                        الصف الثاني الثانوي
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white-100 dark:hover:bg-white-600 dark:text-black-200 dark:hover:text-black"
                      >
                        الصف الثالث الثانوي
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-black bg-white-700 rounded-sm md:bg-transparent md:text-black-700 md:p-0 md:dark:text-black-500 dark:bg-white-600 md:dark:bg-transparent"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li >
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent"
          >
            Services
          </a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    
);
}

export default Navbar;

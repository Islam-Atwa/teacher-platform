// "use client";
import { useState } from 'react';
import {useTheme} from '../Context/ThemeContext'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import styled from "styled-components";

import logo0 from "./logo0.png";
// import logo from "./logo.svg";

const products = [
  {
    name: "المرحلة الإعدادية",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },


  {
    name: "المرحلة الثانوية ",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "المرحلة الثانوية الأزهرية",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  }
]
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

const StyledWrapper = styled.div`
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73c0fc;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  border-radius: 20px;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
  transition: 0.4s;
}

.sun svg {
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

.moon svg {
  fill: #73c0fc;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

/* .switch:hover */
.sun svg {
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* .switch:hover */
.moon svg {
  animation: tilt 5s linear infinite;
}

@keyframes tilt {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.input:checked + .slider {
  background-color: #183153;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #183153;
}

.input:checked + .slider:before {
  transform: translateX(30px);
}
`;
export default function Navbar() {

  // Dark and light mode feature
  const {darkMode, toggleTheme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : ""}`}>
    <header className={`fixed top-0 left-0 w-full z-50 shadow-xl/50  border-gray-200 dark:border-gray-700 ${darkMode ? "dark:bg-gray-800 dark:text-white" : "bg-white"}  `}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between px-3 lg:px-8 py-1" 
      >
        {/* logo brand AND Title 1*/}
        <div className="flex lg:flex-2">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-1">
            <div className="h-25 w-25 flex items-center">
              <img
                alt=""
                src={logo0}
                className="h-full w-full object-contain mt-2"
              />
            </div>

            <h2 className="sr-nly text-2xl  hover:">
              منصة <span>للرياضيات</span>
            </h2>
          </a>
        </div>

        {/* Menue Toogle 2 */}
        <div className="flex lg:hidden order-last">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center  rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Links In Large Screen 3*/}
        <PopoverGroup className="hidden lg:flex flex-2 lg:gap-x-10 items-center justify-center ">
          <Popover className="relative">
            <PopoverButton className={`flex items-center gap-x-1  text-sm/6 font-semibold mb-3  text font-medium transition-all duration-300 
             hover:text-transparent hover:bg-clip-text 
             hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500  `}  >
              المراحل الدراسية
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className={`absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in
                ${darkMode ? "bg-gray-300 text-white" : '' }`}
            >
              <div className={`p-4  ${darkMode ? "bg-gray-800 text-white " : '' }`}>
                {products.map((item) => (
                  <div
                    key={item.name}
                    className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6  ${darkMode ? "text-white hover:bg-gray-500" : 'hover:bg-gray-100'} `}
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className={`flex-auto `}>
                      <a
                        href={item.href}
                        className={`block font-semibold ${darkMode ? "bg-dark-300 text-gray-100" : '' }`}
                      >
                        {item.name}
                        <span className={`absolute inset-0 ${darkMode ? "text-gray-100" : '' }`} />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold hover:text-pink">
            الكتب
          </a>
          <a href="#" className="text-sm/6 font-semibold">
            الكورسات
          </a>
        </PopoverGroup>

        {/* Dark And light Mode 4*/}
        <div className="lg:flex sm:flex lg:order-last order-first">
          <StyledWrapper className="px-3 py-4 lg:flex">
            <label className="switch" onChange={toggleTheme}>
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r={5} cy={12} cx={12} />
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </span>
              <input
                type="checkbox"
                className="input"
                // onChange={toggleTheme}
                // checked={darkMode}
                
                
                />
              <span className="slider" />
            </label>
          </StyledWrapper>
        </div>
        {/* Mobile Menu 5*/}
        <Dialog
          className={`lg:hidden sm:order-last`}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          //
        >
          <div className={`fixed inset-0 z-50  ${darkMode ? "bg-gray-900 dark:text-white " : "bg-white text-gray-900"}`}/>
          <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6  sm:ring-1 transition-colors duration-300
    `}>
            <div className={`flex items-center justify-between `}>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={logo0}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`-m-2.5 rounded-md p-2.5 ${darkMode ? "text-white" : ''}`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* Product in Small Screen */}
            <div className={`mt-6 flow-root `}>
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {/*  */}
                    <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold   hover:bg-gray-50' ${darkMode ? "text-white" : ''}`}>
                      المراحل الدراسية
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={`size-5 flex-none group-data-open:rotate-180  ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className={`mt-2 space-y-2  ${darkMode ? "text-white" : ''}`}>
                      {[...products].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  {/* اللينكات في الشاشات الصغيره */}
                  <a
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50 ${darkMode ? "text-white" : ''}`}
                  >
                    الكورسات
                  </a>
                  <a
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50 ${darkMode ? "text-white" : ''}`}
                  >
                    الكتب
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>  
    </header>

    </section>
  );
}

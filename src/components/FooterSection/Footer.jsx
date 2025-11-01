import logo from "../Navbar/logo0.png";

export const Footer = ()=>{
    return(
      <footer className="bg-gray-950 text-white px-6 py-6 ">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* <!-- Right side --> */}
    <div className="flex items-center gap-3 mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="w-10 h-10 rounded-full"/>
      <h3 className="text-xl font-semibold">إبراهيم عطوة</h3>
    </div>

    {/* <!-- Left side --> */}
    <ul class="flex justify-center items-center mt-5 space-x-5 mb-8">
        {/* <h3>تابعنا علي حسابات السوشيال ميديا</h3> */}
  {/* <!-- Facebook --> */}
  <li>
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10 h-10"
      >
        <path
          clip-rule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </a>
  </li>

{/* يوتيوب */}
  <li className="mb-6">
    <a
      href="#"
      class="text-gray-500 hover:text-white-900 dark:hover:text-white dark:text-gray-400 "
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10 h-10"
      >
        <path d="M23.498 6.186a2.974 2.974 0 00-2.09-2.106C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.58a2.974 2.974 0 00-2.09 2.106A31.65 31.65 0 000 12a31.65 31.65 0 00.502 5.814 2.974 2.974 0 002.09 2.106C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.58a2.974 2.974 0 002.09-2.106A31.65 31.65 0 0024 12a31.65 31.65 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    </a>
  </li>

{/* واتساب */}
  <li>
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10 h-10"
      >
        <path d="M12.04 2C6.51 2 2 6.51 2 12.04c0 2.12.55 4.14 1.6 5.93L2 22l4.17-1.57A10 10 0 0012.04 22C17.57 22 22 17.49 22 12.04 22 6.51 17.57 2 12.04 2zm0 18.18c-1.76 0-3.44-.47-4.9-1.35l-.35-.21-2.46.92.84-2.39-.24-.38A8.07 8.07 0 013.96 12c0-4.47 3.63-8.11 8.08-8.11 4.45 0 8.08 3.64 8.08 8.11 0 4.47-3.63 8.18-8.08 8.18zm4.55-6.19c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.96-.15.16-.3.18-.55.05-.25-.13-1.05-.39-2-1.2-.74-.66-1.25-1.47-1.39-1.72-.14-.25-.01-.39.12-.52.13-.13.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.05-.13-.56-1.33-.76-1.82-.2-.49-.41-.42-.56-.43-.15-.01-.32-.01-.49-.01s-.45.06-.68.32c-.23.25-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.76 4.37 3.87.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.31z"/>
      </svg>
    </a>
  </li>
{/* تليجرام */}
  <li>
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10 h-10"
      >
        <path d="M9.999 15.5l-.633 4.477c.902 0 1.29-.387 1.76-.85l4.23-3.943 4.398 3.218c.807.445 1.387.211 1.59-.744l2.878-13.52c.292-1.296-.468-1.8-1.31-1.476L2.717 9.41c-1.274.492-1.255 1.184-.217 1.5l4.823 1.507 11.217-7.067c.528-.321 1.01-.144.615.177"/>
      </svg>
    </a>
  </li>
    </ul>


  </div>

  <hr className="border-gray-700 my-4" />
  <p className="text-center">🧡تم صنع هذه المنصة بهدف تهيئة الطالب في مادة الرياضيات للمرحلتين الإعدادية والثانوية  🧡</p>

    <p class="mt-1  text-center text-sm text-white">
      صُنعت بواسطة ❤ 
      <a href="https://your-portfolio-link.com" target="_blank" class="text-blue-400 hover:underline mr-1">
            Islam Atwa
      </a>
    </p>
    <p className="mt-4 text-center text-sm text-gray-400">© 2025 Website Name. جميع الحقوق محفوظة.</p>
</footer>


    )
}



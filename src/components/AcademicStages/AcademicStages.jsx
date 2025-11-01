import midStudent from '../AcademicStages/mid-student.jpg';
import HighStudent from '../AcademicStages/studentHigh.png';
import azharStudent from '../AcademicStages/azharStudent2.png';
import './Academic.css';
import { useTheme } from '../Context/ThemeContext';

const AcademicStages = () => {
  const { darkMode } = useTheme();

  return (
    <section className={ `${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="mx-auto px-8">
        <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
          المراحل{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            الدراسية
          </span>
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mr-8 ">
          {[
            { img: midStudent, title: "المرحلة الإعدادية", desc: "جميع كورسات المرحلة الإعدادية." },
            { img: HighStudent, title: "المرحلة الثانوية", desc: "جميع كورسات المرحلة الثانوية." },
            { img: azharStudent, title: "الشهادة الثانوية الأزهرية", desc: "جميع كورسات الصف الثالث الثانوي الأزهري." }
          ].map((stage, i) => (
            <div
              key={i}
              className={` mb-32 rounded-xl border p-4 shadow-sm transition hover:shadow-lg sm:p-6  cursor-pointer
                ${darkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700 hover:border-gray-600"
                  : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"}`
              }
            >
              <img
                src={stage.img}
                alt={stage.title}
                className="w-full h-64 rounded-lg object-cover"
              />

              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2 text-center">{stage.title}</div>
                <p className={`text-center mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stage.desc}
                </p>
              </div>

              <div className="text-center ">
                <button
                  type="button"
                  className={`cta-button transition-colors duration-300 font-semibold rounded-full px-6 py-2 mt-2 inline-flex items-center gap-2
                    ${darkMode
                      ? "dark:bg-gray-600 shadow-md hover:from-indigo-500 hover:to-purple-600"
                      : ""}`
                  }
                >
                  <span className={`cta-label ${darkMode ? "text-white" : 'text-gray-800'}`}>تصفح الكورسات</span>
                  <svg
                    className={`cta-icon  ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <hr /> */}
    </section>
  );
};

export default AcademicStages;

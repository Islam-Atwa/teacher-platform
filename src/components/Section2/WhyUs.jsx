// import certificateIcon from '../Section2/certificateIcon.png';
// import teacherIcon from '../Section2/teacherIcon.png';
import classIcon from '../Section2/classIcon.png';
import quizIcon from '../Section2/quizIcon.png';
import supportIcon from '../Section2/supportIcon.png';
import analysisIcon from '../Section2/analysisIcon.png';
import studentMath from '../Section2/matstudentAI.png';

import {useTheme} from '../Context/ThemeContext'

// import studentMath from '../Section2/studentMath.svg';
import './WhyUs.css';
function WhyUs() {
    const {darkMode} = useTheme();
    return (
      <section
        className={`${darkMode ? "dark:bg-gray-800 dark:text-white" : ""}`}
      >
        <div className="mx-auto px-8">
          <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            ليه تذاكر معانا
            <span className=" font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
              {" "}
              رياضيات ؟
            </span>
          </h1>
          <div
            className={`max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ${
              darkMode ? "dark:bg-gray-800 dark:text-white" : ""
            }`}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-1 md:items-center md:gap-8">
              {/* Card */}
              <div
                className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 ${
                  darkMode ? "dark:bg-gray-800 dark:text-white" : ""
                }`}
              >
                {/* 1 */}
                <div
                  className={`rounded-lg border ${darkMode? "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-600"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"}
                    p-4 shadow-sm transition hover:shadow-lg sm:p-6 
                    flex flex-col items-center justify-center text-center card-hover`}
                >
                  <img
                    src={classIcon}
                    alt="Icon"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="mt-3 text-lg font-semibold">تبسيط المعلومة</h3>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    هنشرح الأفكار المعقدة بطريقة بسيطة وسهلة الفهم
                  </p>
                </div>

                {/* 2 */}
                <div
                  className={`rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex flex-col items-center justify-center text-center card-hover
                    ${darkMode? "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-600": "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"}
                  `}>
                  <img
                    src={analysisIcon}
                    alt="Icon"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="mt-3 text-lg font-semibold ">
                    دعم الذكاء الصناعي
                  </h3>
                  <p className={`mt-1 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    هنستخدم الذكاء الاصطناعي لتحليل مستواك ويختارلك تدريبات
                    تناسب مستواك{" "}
                  </p>
                </div>
                {/* 3 */}
                <div className={`rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex flex-col items-center justify-center text-center card-hover
                    ${darkMode? "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-600": "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"}
                  `}
                >
                  <img
                    src={quizIcon}
                    alt="Icon"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="mt-3 text-lg font-semibold">
                    اختبارات دورية
                  </h3>
                  <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    هتتدرب علي إمتحانات مستمرة تقيس مستواك ةتجهز لإمتحان نهاية
                    العام
                  </p>
                </div>
                {/* 4 */}
                <div className={`rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex flex-col items-center justify-center text-center card-hover
                    ${darkMode? "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-600": "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"}
                  `}
                >
                  <img
                    src={supportIcon}
                    alt="Icon"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="mt-3 text-lg font-semibold">
                    متابعة ودعم مستمر
                  </h3>
                  <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    هتابع تقدمكم دايمًا دا هيمنع انك تتشتت أو تحس بالإحباط
                  </p>
                </div>
              </div>

              {/* Image */}
              <div>
                <img
                  src={studentMath}
                  className="rounded shadow-xl rounded-4xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default WhyUs;

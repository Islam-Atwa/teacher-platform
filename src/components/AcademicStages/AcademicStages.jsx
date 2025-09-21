// import test from '../CourseSection/test.jpg';
import midStudent from '../AcademicStages/mid-student.jpg';
import HighStudent from '../AcademicStages/studentHigh.png';
import azharStudent from '../AcademicStages/azharStudent2.png';
import './Academic.css'


const AcademicStages = () => {
  return (
    <section>
      <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">

      <div className="container mx-auto mx-auto p-4 mt-14">
      <h2 className="container section-title"> المراحل الدراسية </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* <!-- Replace this with your grid items --> */}
          <div className="bg-white rounded-lg border p-4">
            <img src={midStudent} alt="Placeholder Image" className="w-full h-68 rounded-md object-cover"/>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">المرحلة الإعدادية</div>
 
              <p className="text-gray-700 text-base text-center mt-6">
                جميع كورسات المرحلة الإعدادية.
              </p> 
            </div>
            <button type="button" className="cta-button">
                <span className="cta-label">تصفح الكورسات</span>   
                <svg
                  className="cta-icon"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
  >         
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
                </svg>
            </button>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <img src={HighStudent} alt="Placeholder Image" className="w-full h-68 rounded-md object-cover"/>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">المرحلة الثانوية</div>
              <p className="text-gray-700 text-base text-center mt-6">
                جميع كورسات المرحله الثانويه.
              </p>
            </div>
            <button type="button" className="cta-button">
                <span className="cta-label">تصفح الكورسات</span>   
                <svg
                  className="cta-icon"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
  >         
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
                </svg>
            </button>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <img src={azharStudent} alt="Placeholder Image" className="w-full h-68 rounded-md object-cover"/>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">الشهادة الثانوية الأزهرية</div>
              <p className="text-gray-700 text-base text-center mt-6">
                جميع كورسات الصف الثالث الثانوي الأزهري.
              </p>
            </div>
            {/* <!-- From Uiverse.io by nathAd17 -->  */}
            <button type="button" className="cta-button">
                <span className="cta-label">تصفح الكورسات</span>   
                <svg
                  className="cta-icon"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
  >         
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
                </svg>
            </button>
            </div>
        </div>
      </div>
    </div>
        


    </section>
  );
};

export default AcademicStages;

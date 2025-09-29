// import certificateIcon from '../Section2/certificateIcon.png';
// import teacherIcon from '../Section2/teacherIcon.png';
import classIcon from '../Section2/classIcon.png';
import quizIcon from '../Section2/quizIcon.png';
import supportIcon from '../Section2/supportIcon.png';
import analysisIcon from '../Section2/analysisIcon.png';
import studentMath from '../Section2/matstudentAI.png';

// import studentMath from '../Section2/studentMath.svg';
import './section2.css';
function studyWithMe() {
    return (
        <section>
            
            <div className="container mx-auto px-2">
                <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">ليه تذاكر معانا
                    <span className=' font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight'> رياضيات ؟</span>
                </h1>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-1 md:items-center md:gap-8">
                    {/* Card */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                        {/* 1 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 
                                        flex flex-col items-center justify-center text-center card-hover" >
                            <img
                                src={classIcon}
                                alt= "Icon"
                                className='w-10 h-10 object-contain'
                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-800">تبسيط المعلومة</h3>
                            <p className="text-gray-600">هنشرح الأفكار المعقدة بطريقة بسيطة وسهلة الفهم </p>
                        </div>
                        {/* 2 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 
                                        flex flex-col items-center justify-center text-center card-hover">
                            <img 
                                src={analysisIcon}
                                alt ="Icon"
                                className='w-10 h-10 object-contain'

                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-800">دعم الذكاء الصناعي</h3>
                            <p className="text-gray-600">هنستخدم الذكاء الاصطناعي لتحليل مستواك  ويختارلك تدريبات تناسب مستواك    </p>
                        </div>
                        {/* 3 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 
                                        flex flex-col items-center justify-center text-center card-hover">
                            <img 
                                src={quizIcon}
                                alt ="Icon"
                                className='w-10 h-10 object-contain'

                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-800">اختبارات دورية</h3>
                            <p className="text-gray-600">هتتدرب علي إمتحانات  مستمرة تقيس مستواك ةتجهز لإمتحان نهاية العام</p>
                        </div>
                        {/* 4 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 
                                        flex flex-col items-center justify-center text-center card-hover">
                            <img
                                src={supportIcon}
                                alt= "Icon"
                                className='w-10 h-10 object-contain'
                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-800"> متابعة ودعم مستمر </h3>
                            <p className="text-gray-600">هتابع تقدمكم دايمًا دا هيمنع انك تتشتت أو تحس بالإحباط</p>
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

export default studyWithMe;

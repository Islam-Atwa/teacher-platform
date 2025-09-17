// import certificateIcon from '../Section2/certificateIcon.png';
// import teacherIcon from '../Section2/teacherIcon.png';
import classIcon from '../Section2/classIcon.png';
import quizIcon from '../Section2/quizIcon.png';
import supportIcon from '../Section2/supportIcon.png';
import analysisIcon from '../Section2/analysisIcon.png';
import './section2.css';
function studyWithMe() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <h1 className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">ليه تذاكر معانا</h1>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    {/* Card */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
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
                            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded"
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

import React, { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion' 
import { Button } from "@/components/ui/button"
import { PlaySquare } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import courseData from '../../data/CourseData.js';

// بيانات الكورس: الوحدات والفيديوهات 
const courseUnits = [
  { 
    value: "unit-1", 
    title: "الوحدة الأولى:  أساسيات التفاضل والتكامل", 
    
    videos: [
      { id: 'video1', title: 'الفيديو  (المقدمة)', description:'في هذا الفيديو، نستعرض تفاصيل الكورس، الأهداف التعليمية، وكيفية الاستفادة القصوى من المحتوى المقدم.', link: 'https://www.youtube.com/embed/pqZvxYKSMnc?si=sYhsLXHGzUYRHZwQ' },
      { id: 'video2', title: 'الفيديو الأول (خصائص الأعداد)', description:'في هذا الجزء، نشرح مفهوم المعادلات الجبرية، وأنواعها الأساسية، وخطوات حل المعادلات من الدرجة الأولى.', link: 'https://www.youtube.com/embed/mTLr374CB8U?si=CfhymH7P54uOiRG5' },
      { id: 'video3', title: 'الفيديو الثاني ( خصائص الأعداد 2)', description:'في هذا الفيديو التطبيقي، نقوم بحل مجموعة من التمارين المتنوعة على المعادلات الجبرية لترسيخ المفاهيم المكتسبة.', link: 'https://www.youtube.com/embed/Vd_O5-0Eexg?si=M9j9pE0wyZEmKmbJ' },
      { id: 'video3', title: 'الفيديو الثالث ( خصائص الأعداد 3)', description:'في هذا الفيديو التطبيقي، نقوم بحل مجموعة من التمارين المتنوعة على المعادلات الجبرية لترسيخ المفاهيم المكتسبة.', link: 'https://www.youtube.com/embed/9H33cM6t1k4?si=9Tj3fIcilnC9X0m9' },
      { id: 'video3', title: 'الفيديو الرابع ( أنواع الأعداد)', description:'في هذا الفيديو التطبيقي، نقوم بحل مجموعة من التمارين المتنوعة على المعادلات الجبرية لترسيخ المفاهيم المكتسبة.', link: 'https://www.youtube.com/embed/olMTqw-JJr8?si=Pt7clfzb5RtQvfD5' },
    ] 
  },
  { 
    value: "unit-2", 
    title: "الوحدة الثانية: الدوال والرسوم البيانية", 
    videos: [
      { id: 'video4', title: 'الفيديو الرابع (الدوال)', description:'تعريف الدوال الرياضية، النطاق (Domain) والمدى (Range)، وكيفية تمثيل الدوال المختلفة بيانياً.', link: 'https://www.youtube.com/embed/g8f3H5Lg11U' },
      { id: 'video5', title: 'الفيديو الخامس (البيانات)', description:'شرح قراءة وتحليل الرسوم البيانية للدوال، وتحديد الخصائص الرئيسية مثل نقاط التقاطع والميل.', link: 'https://www.youtube.com/embed/sF8zPz4r1jE' },
    ] 
  },
  { 
    value: "unit-3", 
    title: "الوحدة الثالثة: حساب التفاضل والتكامل", 
    videos: [
      { id: 'video6', title: 'الفيديو السادس (التفاضل)', description:'مفهوم التفاضل، الاشتقاق الأساسي، وقواعد الاشتقاق اللازمة لحساب ميل المماس للمنحنيات.', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 'video7', title: 'الفيديو السابع (التكامل)', description:'مقدمة إلى مفهوم التكامل، التكامل غير المحدد (Anti-Derivative)، وشرح بسيط للمنطقة تحت المنحنى.', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 'video8', title: 'الفيديو الثامن (المراجعة)', description:'مراجعة شاملة لأهم مفاهيم التفاضل والتكامل مع أمثلة متقدمة.', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ] 
  }
];

// تحديد الفيديو الافتراضي الأول في البيانات
// هات العنصر الاول من المصفوفة لو موجودة ولو مش موجودة رجع undefined
const initialVideo = courseUnits?.[0]?.videos?.[0] || { link: '', title: 'يرجى اختيار درس لبدء المشاهدة' }; 

export const CoursePage = () => {

  // Dark And Light Mode
  const {darkMode} = useTheme();


  // حالة لتخزين رابط الفيديو الحالي وعنوانه - تم استخدام قيمة افتراضية آمنة
  const [currentVideoUrl, setCurrentVideoUrl] = useState(initialVideo.link); // لينك الفيديو المعروض وواخد قيمة ابتدائية اول فيديو في array
  const [currentVideoTitle, setCurrentVideoTitle] = useState(initialVideo.title);
  const [currentVideoDescriotion, setCurrentVideoDescription] = useState(initialVideo.description)

  const handleVideoSelect = (url, title, description) => { 
    setCurrentVideoUrl(url); // تحديث رابط الفيديو الحالي
    setCurrentVideoTitle(title); // تحديث عنوان الفيديو الحالي
    setCurrentVideoDescription(description); // تحديث وصف الفيديو الحالي
  };

  return (
    <div className={`mx-auto py-32 px-12 ${darkMode ? "dark:bg-gray-800 dark:text-white" : ''}`}>
      <header className="title-course pb-6 border-b mb-6 text-start">
        <h1 className ={`text-3xl font-extrabold text-primary ${darkMode ? 'dark:bg-gray-800 text-white' : ""}`}>كورس أساسيات الرياضيات</h1>

      </header>
      
      <main className={`grid md:grid-cols-3 gap-6 lg:gap-8 md:min-h-[60vh] lg:min-h-[70vh]
       ${darkMode ? "dark:bg-gray-800 dark:text-white" : ""}` 

      }>
        
        {/* ======================================= */}
        {/* قسم القائمة الجانبية (Aside)  */}
        {/* ======================================= */}
        <aside className={`list-video col-span-3 md:col-span-3 lg:col-span-1 order-2 lg:order-1 md:order-2 border rounded-lg p-1 shadow-lg bg-card md:h-[40vh] lg:h-[100vh] overflow-y-auto ${darkMode ? "bg-gray-800 dark:text-white" : ""}`}>
          <h3 className="text-xl font-semibold mb-4 text-center border-b pb-2">محتوى الكورس</h3>
          
          <Accordion type="single" collapsible className={`w-full `}>
            {/* map عشان يعدي علي كل وحده ويديها العنوان والقيمه */}
            {courseUnits.map((unit) => (
              <AccordionItem key={unit.value} value={unit.value} className="border-b ">
                <AccordionTrigger className={` ${darkMode ? "dark:bg-gray-800  hover:text-gray-600" : "font-bold text-lg text-right hover:text-primary"}`}>
                  {unit.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='mr-4 flex flex-col gap-2 p-2'>
                    {/* map عشان يعدي علي كل فيديو في الوحدة  */}
                    {unit.videos.map((video) => (
                      <li 
                        key={video.id} 
                        className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors 
                                   ${currentVideoUrl === video.link ? 'bg-secondary text-secondary-foreground font-semibold' : 'hover:bg-muted'}`}
                        onClick={() => handleVideoSelect(video.link, video.title, video.description)}
                      >
                        <PlaySquare className="h-4 w-4 shrink-0" />
                        <span>{video.title}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </aside>
        
        {/* ======================================= */}
        {/* قسم عرض الفيديو (Video Container) - يأخذ عمودين (2/3) */}
        {/* ======================================= */}
        <div className={`video-container col-span-3  lg:col-span-2 md:col-span-3 order-1 md:order-1 lg:order-2 space-y-4 ${darkMode ? "bg-gray-800 text-white" : ""}`}>
          <h2 className="text-2xl font-bold text-center p-2 rounded-lg bg-primary text-primary-foreground">
            {currentVideoTitle}
          </h2>
          <figure className='video-show w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center'>
            {/* عرض الـ iframe فقط إذا كان هناك رابط فيديو متاح */}
            {currentVideoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={currentVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='w-full h-full'
              ></iframe>
            ) : (
              <p className="text-white text-lg">يرجى اختيار فيديو من القائمة الجانبية.</p>
            )}
          </figure>
          
          <div className={`description border p-4 rounded-lg bg-card shadow   ${darkMode ? "bg-gray-800 text-white border-none " : ""}`}>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "bg-gray-800 text-white" : ""}`}>{currentVideoTitle}</h3>
            <p className={`text-muted-foreground ${darkMode ? "bg-gray-800  text-gray-400" : ""} `}>{currentVideoDescriotion}</p>
          </div>
        </div>

      </main>
    </div>
  );
}
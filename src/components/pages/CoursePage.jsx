import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion' 
import { Button } from "@/components/ui/button"
import { PlaySquare } from 'lucide-react';

// بيانات الكورس: الوحدات والفيديوهات 
const courseUnits = [
  { 
    value: "unit-1", 
    title: "الوحدة الأولى: أساسيات الجبر", 
    videos: [
      { id: 'video1', title: 'الفيديو الأول (المقدمة)', link: 'https://www.youtube.com/embed/IuJLTR71UWA?si=wOIJOQiIKcvdl4C9' },
      { id: 'video2', title: 'الفيديو الثاني (المعادلات)', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 'video3', title: 'الفيديو الثالث (حل التمارين)', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ] 
  },
  { 
    value: "unit-2", 
    title: "الوحدة الثانية: الدوال والرسوم البيانية", 
    videos: [
      { id: 'video4', title: 'الفيديو الرابع (الدوال)', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 'video5', title: 'الفيديو الخامس (البيانات)', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ] 
  },
  { 
    value: "unit-3", 
    title: "الوحدة الثالثة: حساب التفاضل والتكامل", 
    videos: [
      { id: 'video6', title: 'الفيديو السادس (التفاضل)', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ] 
  }
];

// تحديد الفيديو الافتراضي الأول في البيانات
const initialVideo = courseUnits?.[0]?.videos?.[0] || { link: '', title: 'يرجى اختيار درس لبدء المشاهدة' };

// تم تغيير التصدير إلى "تصدير مُسمى" (Named Export) ليتوافق مع الاستيراد في App.jsx
export const CoursePage = () => {
  // حالة لتخزين رابط الفيديو الحالي وعنوانه - تم استخدام قيمة افتراضية آمنة
  const [currentVideoUrl, setCurrentVideoUrl] = useState(initialVideo.link);
  const [currentVideoTitle, setCurrentVideoTitle] = useState(initialVideo.title);

  const handleVideoSelect = (url, title) => {
    setCurrentVideoUrl(url);
    setCurrentVideoTitle(title);
  };

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className="title-course pb-6 border-b mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-primary">كورس أساسيات الرياضيات</h1>
      </div>
      
      <main className='grid md:grid-cols-3 gap-6 lg:gap-8'>
        
        {/* ======================================= */}
        {/* قسم القائمة الجانبية (Aside) - يأخذ عمود واحد (1/3) */}
        {/* ======================================= */}
        <aside className="list-video col-span-3 md:col-span-1 border rounded-lg p-4 shadow-lg bg-card max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 text-center border-b pb-2">محتوى الكورس</h3>
          
          <Accordion type="single" collapsible className="w-full">
            {courseUnits.map((unit) => (
              <AccordionItem key={unit.value} value={unit.value} className="border-b">
                <AccordionTrigger className='font-bold text-lg text-right hover:text-primary'>
                  {unit.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='mr-4 flex flex-col gap-2 p-2'>
                    {unit.videos.map((video) => (
                      <li 
                        key={video.id} 
                        className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors 
                                   ${currentVideoUrl === video.link ? 'bg-secondary text-secondary-foreground font-semibold' : 'hover:bg-muted'}`}
                        onClick={() => handleVideoSelect(video.link, video.title)}
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
        <div className='video-container col-span-3 md:col-span-2 space-y-4'>
          <h2 className="text-2xl font-bold text-center p-2 rounded-lg bg-primary text-primary-foreground">
            {currentVideoTitle}
          </h2>
          <div className='video-show w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center'>
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
          </div>
          
          <div className='description border p-4 rounded-lg bg-card shadow'>
            <h3 className='text-xl font-semibold mb-2'>وصف الفيديو:</h3>
            <p className='text-muted-foreground'>هذا هو الجزء المخصص لعرض وصف الفيديو الحالي، الملاحظات، أو أي معلومات إضافية تتعلق بالدرس.</p>
          </div>
        </div>

      </main>
    </div>
  );
}

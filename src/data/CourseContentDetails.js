// بيانات الوحدات والفيديوهات التفصيلية لكل كورس
export const courseContentDetails = {
  // الكورس رقم 1: أساسيات الرياضيات
  '1': {
    units: [
      { 
        value: "unit-1", 
        title: "الوحدة الأولى: أساسيات الجبر", 
        videos: [
          { id: 'v1_1', title: 'الفيديو الأول (المقدمة)', description:'نستعرض تفاصيل الكورس، الأهداف التعليمية، وكيفية الاستفادة القصوى.', link: 'https://www.youtube.com/embed/2-z2o124wDk?autoplay=1&mute=1' },
          { id: 'v1_2', title: 'الفيديو الثاني (المعادلات)', description:'شرح مفهوم المعادلات الجبرية، وأنواعها الأساسية، وخطوات حل المعادلات من الدرجة الأولى.', link: 'https://www.youtube.com/embed/d-o5L_c0FwY' },
          { id: 'v1_3', title: 'الفيديو الثالث (حل التمارين)', description:'فيديو تطبيقي لحل مجموعة من التمارين المتنوعة على المعادلات الجبرية لترسيخ المفاهيم المكتسبة.', link: 'https://www.youtube.com/embed/v9C-jXv-l-I' },
        ] 
      },
      { 
        value: "unit-2", 
        title: "الوحدة الثانية: الدوال والرسوم البيانية", 
        videos: [
          { id: 'v1_4', title: 'الفيديو الرابع (الدوال)', description:'تعريف الدوال الرياضية، النطاق (Domain) والمدى (Range)، وكيفية تمثيل الدوال المختلفة بيانياً.', link: 'https://www.youtube.com/embed/g8f3H5Lg11U' },
          { id: 'v1_5', title: 'الفيديو الخامس (البيانات)', description:'شرح قراءة وتحليل الرسوم البيانية للدوال، وتحديد الخصائص الرئيسية مثل نقاط التقاطع والميل.', link: 'https://www.youtube.com/embed/sF8zPz4r1jE' },
        ] 
      },
    ]
  },
  
  // الكورس رقم 2: منهج الصف الثالث الاعدادي
  '2': {
    units: [
      { 
        value: "unit-1", 
        title: "الوحدة الأولى: الجبر والإحصاء", 
        videos: [
          { id: 'v2_1', title: 'مقدمة الجبر والإحصاء', description:'نظرة عامة على المنهج وأهميته في المرحلة الإعدادية.', link: 'https://www.youtube.com/embed/Fw0JqH68tS4' },
          { id: 'v2_2', title: 'الدرس الأول: حاصل الضرب الديكارتي', description:'شرح مفهوم حاصل الضرب الديكارتي وكيفية تمثيله بيانياً.', link: 'https://www.youtube.com/embed/B9i7b1wHlW4' },
        ]
      },
      {
        value: "unit-2",
        title: "الوحدة الثانية: الهندسة والقياس",
        videos: [
          { id: 'v2_3', title: 'الدرس الثالث: البعد بين نقطتين', description:'تطبيق قانون البعد بين نقطتين وحل التمارين المتعلقة به.', link: 'https://www.youtube.com/embed/L73xX1iGz9E' },
        ]
      }
    ]
  },

  // الكورس رقم 3: منهج الصف الأول الثانوي
  '3': {
    units: [
      { 
        value: "unit-1", 
        title: "الوحدة الأولى: حساب المثلثات", 
        videos: [
          { id: 'v3_1', title: 'مقدمة حساب المثلثات', description:'مفاهيم الزاوية الموجهة والقياس الستيني والدائري.', link: 'https://www.youtube.com/embed/3m4R3K-u7oY' },
        ]
      },
      {
        value: "unit-2",
        title: "الوحدة الثانية: المتجهات",
        videos: [
          { id: 'v3_2', title: 'المتجهات والمفاهيم الأساسية', description:'شرح مفهوم المتجه والفرق بين الكمية القياسية والمتجهة.', link: 'https://www.youtube.com/embed/g8f3H5Lg11U' },
          { id: 'v3_3', title: 'جمع وطرح المتجهات', description:'القواعد الهندسية والجبرية لجمع وطرح المتجهات.', link: 'https://www.youtube.com/embed/sF8zPz4r1jE' },
        ]
      }
    ]
  },
};
import test from '../components/CourseSection/test.jpg';
import star from '../components/CourseSection/star.png';
const courseData=[
    {
        id:1,
        title: 'كو رس أساسيات الرياضيات',
        description: 'فيالكورس دا هيساعدك تراجع علي الفاتك ',
        img: test,
        price : '200',
        stage: 'الصف الثالث الثانوي',
        icon: star,
        isAvalilable:true,
    },         
    {
        id:2,
        title: 'منهج الصف الثالث الاعدادي ',
        description: 'منهج الصف الثالث الاعدادي كاملا ',
        img: test,
        price : '150',
        stage: 'الصف الثالث الاعدادي',
        icon: star,
        isAvalilable:false,
    },         
    {
        id:3,
        title: 'منهج الصف الاول الثانوي',
        description: 'منهج الصف الاول الثانوي كاملا ',
        img: test,
        price : '150',
        icon: star,
        stage: 'الصف الاول الثانوي',
        isAvalilable:true,
    },         
];

console.log(` the type is ${typeof courseData}`)

export default courseData;

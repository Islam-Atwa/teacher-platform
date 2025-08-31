import fs from "fs";

// دالة التحويل من HTML → JSX
function htmlToJsx(html) {
  return html
    .replace(/\bclass=/g, "className=") // class → className
    // for → htmlFor 
    .replace(/\bfor=/g, "htmlFor=")
    // خصائص SVG إلى camelCase
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    // التعليقات HTML → JSX
    .replace(/<!--(.*?)-->/gs, "{/*$1*/}")
    // إغلاق التاجز المفردة <img> → <img />
    .replace(/<img(.*?)>/g, "<img$1 />")
    .replace(/<input(.*?)>/g, "<input$1 />")
    .replace(/<br(.*?)>/g, "<br$1 />")
    .replace(/<hr(.*?)>/g, "<hr$1 />");
}

// اقرأ input.html
const inputHtml = fs.readFileSync("input.html", "utf8");

// حوله إلى JSX
const jsx = htmlToJsx(inputHtml);

// احفظ النتيجة في output.jsx
fs.writeFileSync("output.jsx", jsx);

console.log("✅ تم التحويل! شوف الملف output.jsx");

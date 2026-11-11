export default function HeroComponent() {
  return (
    <div className="bg-gray-500 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4 font-medium">
          นักพัฒนา Full-Stack Web Application ที่ถนัดการสร้างระบบด้วย Next.js
          และ TypeScript ผมให้ความสำคัญกับการทำระบบที่ใช้งานง่าย
          จุดเด่นของผมคือการนำ AI และเครื่องมือใหม่ๆ เข้ามาช่วยแก้ปัญหา
          เเละประยุกต์ เวลาเขียนโปรแกรมและต่อยอดในตัวผลิตภัณฑ์
          เป้าหมายตอนนี้คือการมองหาโอกาสที่จะได้ลงมือทำระบบจริงๆ
          เพื่อสร้างผลงานที่ตอบโจทย์ผู้ใช้งาน และพร้อมที่จะเรียนรู้สิ่งใหม่ๆ
          จากการทำงานร่วมกับทีมครับ
        </p>
      </div>
      <div>
        <img src="me.jpg" alt="Profile Image" className="rounded-full h-5 w-5" />
      </div>
    </div>
  );
}

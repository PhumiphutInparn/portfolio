import { Link, Button } from "@heroui/react";

export default function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-3 border-b rounded-xl shadow-md p-4 ">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold text-lg ">Portfolio</p>
          </div>
        </header>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">เกี่ยวกับฉัน</Link>
            </li>
            <li>
              <Link href="#">ประสบการณ์การทำงาน</Link>
            </li>
          </ul>
        </div>
        {/* เดี๋ยวทำเปลี่ยนภาษา */}
        <div className="flex items-center ">
        
        </div>
      </nav>
    </div>
  );
}

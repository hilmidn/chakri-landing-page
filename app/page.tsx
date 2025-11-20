import Image from "next/image";
import { TbCategory2 } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <header className="bg-light text-dark container mx-auto flex h-[120px] items-center justify-between px-4 md:px-0">
        {/* LOGO */}
        <div className="relative h-10 w-20 md:h-[62.56px] md:w-[121px]">
          <Image src="/logo.png" alt="Chakri Logo" fill />
        </div>
        {/* NAVIGATION */}
        <nav className="hidden md:block">
          <ul className="text-dark flex items-center justify-center gap-[62px] text-[18px] font-medium">
            <li>Category</li>
            <li>Job</li>
            <li>How it works</li>
            <li>Testimonial</li>
          </ul>
        </nav>

        {/* BUTTON */}
        <div className="hidden md:flex md:items-center md:gap-2.5">
          <button className="bg-light text-dark rounded-[10px] px-10 py-[22px] text-[16px] font-bold">
            Register
          </button>
          <button className="bg-primary text-light rounded-[10px] px-10 py-[22px] text-[16px] font-bold">
            Sign In
          </button>
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden">
          <button className="text-primary text-[24px]">
            <TbCategory2 />
          </button>
        </div>
      </header>
      <main>
        {/* SECTION 1 */}
        <section className="container mx-auto flex items-center justify-between">
          {/* FIND YOUR JOB */}
          <div className="flex max-w-[644px] flex-col">
            <h1 className="text-dark text-[80px] font-extrabold">
              Find Every Job in One Platform
            </h1>
            <input />
            <div className="flex items-center gap-5">
              <h2 className="text-primary text-[16px] font-medium">
                Recent Search :
              </h2>
              <ul className="flex items-center gap-[7px] text-[14px] font-medium">
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  Design
                </li>
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  UI/UX
                </li>
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  Product
                </li>
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  Graphic
                </li>
              </ul>
            </div>
          </div>
          <div>Foto</div>
        </section>
      </main>
    </>
  );
}

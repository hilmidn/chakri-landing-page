import { Poppins } from "next/font/google";
import Image from "next/image";
import { TbCategory2 } from "react-icons/tb";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <>
      <header className="bg-light text-dark container mx-auto flex h-20 items-center justify-between px-6 md:h-[123px] md:px-[62px]">
        {/* LOGO */}
        <div className="relative h-10 min-h-10 w-20 min-w-20 lg:h-[62.56px] lg:w-[121px]">
          <Image src="/logo.png" alt="Chakri Logo" fill />
        </div>
        {/* NAVIGATION */}
        <nav className="hidden lg:block">
          <ul className="text-dark flex items-center justify-center gap-[62px] text-[14px] font-medium lg:text-[18px]">
            <li>Category</li>
            <li>Job</li>
            <li>How it works</li>
            <li>Testimonial</li>
          </ul>
        </nav>

        {/* BUTTON */}
        <div className="hidden lg:flex lg:items-center lg:gap-2.5">
          <button className="bg-light text-dark rounded-[10px] px-10 py-[22px] text-[16px] font-bold">
            Register
          </button>
          <button className="bg-primary text-light rounded-[10px] px-10 py-[22px] text-[16px] font-bold">
            Sign In
          </button>
        </div>

        {/* MOBILE NAV */}
        <div className="lg:hidden">
          <button className="text-primary text-[24px]">
            <TbCategory2 />
          </button>
        </div>
      </header>
      <main>
        {/* SECTION 1 */}
        <section className="container mx-auto flex items-center justify-between px-6 md:px-[62px]">
          {/* FIND YOUR JOB */}
          <div className="flex max-w-[375px] flex-col gap-10 md:max-w-[644px]">
            <h1
              className={`${poppins.className} text-dark text-[30px] leading-10 font-extrabold md:text-[80px] md:leading-[100px]`}
            >
              Find Every Job in One Platform
            </h1>
            <div className="flex items-center justify-between rounded-[10px] bg-white p-3 shadow">
              <input
                className="placeholder-muted/50 text-muted text-[16px] font-bold outline-0"
                placeholder="Job / Position"
              />
              <input
                className="placeholder-muted/50 text-muted text-[16px] font-bold outline-0"
                placeholder="Location"
              />
              <button className="bg-primary text-light rounded-[10px] px-10 py-[22px] text-[16px] font-bold">
                Sign In
              </button>
            </div>
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

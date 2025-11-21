import { Poppins } from "next/font/google";
import Button from "./components/atoms/Button/Button";
import Header from "./components/organisms/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <>
      <Header />
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
              <Button className="button button-primary">Search</Button>
            </div>
            <div className="flex items-center gap-5">
              <h2 className="text-primary text-[16px] font-medium">
                Recent Search :
              </h2>
              <ul className="flex items-center gap-2 text-[14px] font-medium">
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  Design
                </li>
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  UI/UX
                </li>
                <li className="text-muted rounded-xs bg-black/5 px-[5px] py-1">
                  Product
                </li>
                <li className="text-muted hidden rounded-xs bg-black/5 px-[5px] py-1 md:list-item">
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

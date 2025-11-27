import { Poppins } from "next/font/google";
import Button from "./components/atoms/Button/Button";
import Header from "./components/organisms/Header/Header";
import ImageWithVector from "./components/molecules/ImageWithVector";
import Image from "next/image";
import {
  FaDollarSign,
  FaEdit,
  FaPenNib,
  FaHeadphones,
  FaArrowRight,
} from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import HeaderScrollEvents from "./components/organisms/Header/HeaderScrollEvents";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <>
      <Header />
      <HeaderScrollEvents />
      <main>
        {/* SECTION 1 HERO SECTION */}
        {/* FIND YOUR JOB */}
        <section className="bg-light w-full">
          <div className="container mx-auto flex flex-col items-start justify-between gap-[30px] px-6 md:px-[62px] lg:flex-row lg:items-center">
            <div className="flex w-full flex-col gap-6 lg:w-auto">
              {/* TITLE */}
              <div className="max-w-[241px] md:max-w-max lg:max-w-[644px]">
                <h1
                  className={`${poppins.className} text-dark text-[30px] leading-10 font-extrabold lg:text-[80px] lg:leading-[100px]`}
                >
                  Find Every Job in One Platform
                </h1>
              </div>
              {/* FORM SEARCHING */}
              <div className="flex flex-row items-center gap-1 rounded-[10px] bg-white px-3.5 py-3 shadow">
                <input
                  className="placeholder-muted/50 text-muted w-full grid-rows-1 text-[14px] font-bold outline-0"
                  placeholder="Job / Position"
                />
                <input
                  className="placeholder-muted/50 text-muted w-full text-[14px] font-bold outline-0"
                  placeholder="Location"
                />
                <Button className="button button-secondary">Search</Button>
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
            <ImageWithVector />
          </div>
        </section>

        {/* SECTION 2 SUPPORT */}
        <section className="container mx-auto grid grid-cols-2 gap-8 px-6 py-[67px] md:grid-cols-3 lg:grid-cols-6">
          <div className="relative h-[27px] w-full">
            <Image src="/assets/slack.svg" alt="Slack" fill />
          </div>
          <div className="relative h-[27px] w-full">
            <Image src="/assets/netflix.svg" alt="Netflix" fill />
          </div>
          <div className="relative h-[27px] w-full">
            <Image src="/assets/fitbit.svg" alt="Fitbit" fill />
          </div>
          <div className="relative h-[27px] w-full">
            <Image src="/assets/google.svg" alt="Google" fill />
          </div>
          <div className="relative h-[27px] w-full">
            <Image src="/assets/uber.svg" alt="Uber" fill />
          </div>
          <div className="relative h-[27px] w-full">
            <Image src="/assets/airbnb.svg" alt="Airbnb" fill />
          </div>
        </section>

        {/* SECTION 3 CARD SESSION */}
        <section className="container mx-auto flex flex-col px-8">
          <h2
            className={`${poppins.className} text-dark text-center text-[30px] leading-9 font-extrabold`}
          >
            Browse by
            <br /> Job Categories
          </h2>
          <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-4">
            {/* CARD */}
            {/* 1 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <AiFillSound />
              </div>
              <h3 className="text-dark pt-10 text-[20px] leading-10 font-semibold">
                Digital Marketing
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">143 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <FaPenNib />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Art & Design
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">110 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 3 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <FaDollarSign />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Accounting
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">155 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 4 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <BsCameraFill />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Photography
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">95 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 5 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <FaEdit />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Copy Writing
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">113 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 6 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <FaHeadphones />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Music
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">143 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 7 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
              <div className="group-hover:bg-primary group-hover:text-light bg-primary/30 text-primary w-fit rounded-full p-4 text-[30px]">
                <IoMdPeople />
              </div>
              <h3 className="pt-10 text-[20px] leading-10 font-semibold">
                Human Resource
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted">55 Jobs Opened</span>
                <button className="text-dark text-[16px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* 8 */}
            <div className="group border-primary bg-primary hover:bg-primary/80 rounded-lg border p-10 shadow-md">
              <div className="flex items-center justify-between py-3">
                <span className="text-light text-[25px]">
                  Explore <br />
                  30 More
                  <br /> Categories
                </span>
                <button className="text-light text-20px]">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 JOB */}
        <section className="bg-light w-full">
          <div className="container mx-auto flex flex-col items-start justify-between gap-[30px] px-6 md:px-[62px] lg:flex-row lg:items-center">
            <ImageWithVector />
            <div>
              <h2
                className={`${poppins.className} text-dark text-center text-[30px] leading-9 font-extrabold`}
              >
                Watch How Our
                <br /> Platform Work!
              </h2>
              <div className="flex w-full flex-col gap-6 pt-2 lg:w-auto">
                <div className="group flex rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
                  <div className="group-hover:bg-primary group-hover:text-light text-primary h-fit rounded-full bg-white p-4 shadow-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h3>Create Account</h3>
                    <p>
                      Completly foster backward-compatible alignments and
                      multimedia based resources.
                    </p>
                  </div>
                </div>
                <div className="group flex rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
                  <div className="group-hover:bg-primary group-hover:text-light text-primary h-fit rounded-full bg-white p-4 shadow-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h3>Upload CV/Resume</h3>
                    <p>
                      Completly foster backward-compatible alignments and
                      multimedia based resources.
                    </p>
                  </div>
                </div>
                <div className="group flex rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
                  <div className="group-hover:bg-primary group-hover:text-light text-primary h-fit rounded-full bg-white p-4 shadow-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h3>Choose Job</h3>
                    <p>
                      Completly foster backward-compatible alignments and
                      multimedia based resources.
                    </p>
                  </div>
                </div>
                <div className="group flex rounded-lg border border-gray-100 bg-white p-5 shadow-md hover:bg-gray-100">
                  <div className="group-hover:bg-primary group-hover:text-light text-primary h-fit rounded-full bg-white p-4 shadow-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h3>Complete Apply</h3>
                    <p>
                      Completly foster backward-compatible alignments and
                      multimedia based resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

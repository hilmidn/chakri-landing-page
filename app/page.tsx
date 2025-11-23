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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* SECTION 1 HERO SECTION */}
        {/* FIND YOUR JOB */}
        <section className="bg-light container mx-auto flex flex-col items-start justify-between gap-[30px] px-6">
          <div className="flex flex-col gap-6">
            {/* TITLE */}
            <div className="max-w-[241px]">
              <h1
                className={`${poppins.className} text-dark text-[30px] leading-10 font-extrabold`}
              >
                Find Every Job in One Platform
              </h1>
            </div>
            {/* FORM SEARCHING */}
            <div className="flex flex-row items-center gap-1 rounded-[10px] bg-white px-3.5 py-3 shadow">
              <input
                className="placeholder-muted/50 text-muted w-full text-[14px] font-bold outline-0"
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
            <div className="border-primary bg-primary rounded-lg border p-10 shadow-md">
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
      </main>
    </>
  );
}

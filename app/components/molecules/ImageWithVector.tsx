import Image from "next/image";

const ImageWithVector = () => {
  return (
    <div className="relative mx-auto h-[378px] w-[338px] md:h-[620px] md:w-[600px] lg:h-[840px] lg:w-[740px]">
      <Image src={"/man.png"} alt={"Man"} fill />
    </div>
  );
};

export default ImageWithVector;

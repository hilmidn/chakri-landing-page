import Image from "next/image";

const ImageWithVector = () => {
  return (
    <div className="relative mx-auto h-[378] w-[306px] md:h-[620px] md:w-[600px] lg:h-[840px] lg:w-[940px]">
      <Image src={"/man.png"} alt={"Man"} fill />
    </div>
  );
};

export default ImageWithVector;

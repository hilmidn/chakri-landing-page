import Image from "next/image";

const ImageWithVector = () => {
  return (
    <div className="h-[800px] w-[800px]">
      <div className="relative z-20">
        <Image
          src={"/man.png"}
          alt={"Man"}
          width={800}
          height={800}
          className="absolute inset-0 object-cover"
        />
      </div>
      <div className="relative z-10 rotate-20 rounded-tl-[175px] rounded-tr-[150px] rounded-br-[150px] rounded-bl-[300px] border-t border-r border-l border-black/10">
        <div className="bg-secondary mx-5 mt-5 rounded-tl-[175px] rounded-tr-[150px] rounded-br-[150px] rounded-bl-[300px] p-[180px]"></div>
      </div>
    </div>
  );
};

export default ImageWithVector;

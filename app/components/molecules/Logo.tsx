import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative h-10 min-h-10 w-20 min-w-20 lg:h-[62.56px] lg:w-[121px]">
      <Image src="/logo.png" alt="Chakri Logo" fill />
    </div>
  );
};

export default Logo;

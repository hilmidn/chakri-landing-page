import { TbCategory2 } from "react-icons/tb";

const NavMobileButton = () => {
  return (
    <div className="lg:hidden">
      <button className="text-primary text-[24px]">
        <TbCategory2 />
      </button>
    </div>
  );
};

export default NavMobileButton;

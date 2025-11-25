import AuthButtons from "../../molecules/AuthButtons";
import Logo from "../../molecules/Logo";
import NavMenu from "../../molecules/NavMenu";
import NavMobileButton from "../../molecules/NavMobileButton";
import "./header.css";
const Header = () => {
  return (
    <>
      <header className="bg-light fixed top-0 left-0 z-50 w-full">
        <div className="header-inner text-dark container mx-auto flex items-center justify-between px-6 md:px-[62px]">
          <Logo />
          <NavMenu />
          <AuthButtons />
          <NavMobileButton />
        </div>
      </header>

      {/* placeholder */}
      <div className="h-20 md:h-[123px]" />
    </>
  );
};

export default Header;

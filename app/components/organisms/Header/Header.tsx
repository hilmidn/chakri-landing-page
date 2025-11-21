import AuthButtons from "../../molecules/AuthButtons";
import Logo from "../../molecules/Logo";
import NavMenu from "../../molecules/NavMenu";
import NavMobileButton from "../../molecules/NavMobileButton";

const Header = () => {
  return (
    <header className="bg-light text-dark container mx-auto flex h-20 items-center justify-between px-6 md:h-[123px] md:px-[62px]">
      {/* LOGO */}
      <Logo />
      {/* NAVIGATION */}
      <NavMenu />
      {/* BUTTON */}
      <AuthButtons />

      {/* MOBILE NAV */}
      <NavMobileButton />
    </header>
  );
};

export default Header;

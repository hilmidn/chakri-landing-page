import { Button } from "../atoms/Button";

const AuthButtons = () => {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-2.5">
      <Button className="button button-light">Register</Button>
      <Button className="button button-primary">Sign In</Button>
    </div>
  );
};

export default AuthButtons;

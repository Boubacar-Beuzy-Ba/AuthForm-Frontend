import logo from "../assets/LogoBellefit.png";
import bellefitBg from "../assets/BellefitBg.png";

export const HeaderLogo = () => {
  return (
    <div className="mx-4 space-x-2 flex items-center">
      <div className="flex sm:hidden justify-center items-center mx-auto">
        <img src={bellefitBg} alt="Bellefit Bg" className="h-52" />
      </div>
      <div className="hidden sm:block">
        <img src={logo} />
      </div>
      <div>
        <h1 className="text-3xl hidden sm:block">Bellefit</h1>
      </div>
    </div>
  );
};

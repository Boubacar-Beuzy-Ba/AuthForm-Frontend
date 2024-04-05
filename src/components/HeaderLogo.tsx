import logo from "../assets/LogoBellefit.png";

export const HeaderLogo = () => {
  return (
    <div className="mx-4 space-x-2 flex items-center">
      <div>
        <img src={logo} />
      </div>
      <div>
        <h1 className="text-3xl">Bellefit</h1>
      </div>
    </div>
  );
};

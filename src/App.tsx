import "./App.css";
import { HeaderLogo } from "./components/HeaderLogo";
import bellefitBg from "../src/assets/BellefitBg.png";
import { FormInput } from "./components/FormInput";

function App() {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4 rounded-br-3xl rounded-tr-3xl h-screen">
        <HeaderLogo />
        <div className="flex p-4 mx-auto w-full pt-40">
          <FormInput />
        </div>
      </div>
      <div className="w-1/2 p-4 bg-[#EBFCF4] h-screen flex items-center justify-center">
        <img src={bellefitBg} alt="Bellefit Bg" />
      </div>
    </div>
  );
}

export default App;

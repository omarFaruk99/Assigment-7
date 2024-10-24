import logo from "../assets/Images/logo.png";
import { TbCoin } from "react-icons/tb";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between border-2 border-green-500 items-center mt-12">
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="flex space-x-12 items-center mt-2 mb-2 font-semibold text-lg cursor-pointer">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
          <p className="font-semibold border-2 border-stone-200 p-2 rounded-lg flex items-center">
            0 Coin
            <span className="ml-1">
              <TbCoin size={25} color="gold" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

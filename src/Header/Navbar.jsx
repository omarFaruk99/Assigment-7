import PropTypes from "prop-types";
import logo from "../assets/Images/logo.png";
import { TbCoin } from "react-icons/tb";
import { useEffect, useState } from "react";
const Navbar = ({ claimCredit }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change to true when scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky z-50 top-0 bg-white ${
        isScrolled ? "bg-white bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mt-12">
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="flex space-x-12 items-center mt-2 mb-2 font-semibold text-lg cursor-pointer">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
          <p className="font-semibold border-2 border-stone-200 p-2 rounded-lg flex items-center">
            {claimCredit} Coin
            <span className="ml-1">
              <TbCoin size={25} color="gold" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  claimCredit: PropTypes.number,
};
export default Navbar;

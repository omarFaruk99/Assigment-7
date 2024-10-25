import bgimg from "../assets/Images/bg-shadow.png";
import bannerImg from "../assets/Images/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleFreeCredit }) => {
  const bannerStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center", // Center the image
    height: "545px",
    width: "100%",
    backgroundColor: "black",
  };

  return (
    <div className="mt-6">
      <div style={bannerStyle} className="rounded-3xl">
        <div className="flex flex-col items-center justify-center pt-16">
          <div>
            <img src={bannerImg} alt="" />
          </div>
          <div className="text-white text-center mt-6 space-y-4">
            <h1 className="text-4xl font-bold">
              Drafting Ultimate Cricket Team for Upcoming BPL
            </h1>
            <p className="text-2xl font-medium">
              Breaking Barriers, Reaching New Heights
            </p>
            <div className="border border-lime-300 inline-block p-2 rounded-2xl">
              <button
                onClick={() => handleFreeCredit()}
                className="bg-lime-300 p-4 rounded-xl text-black font-semibold"
              >
                Clain Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleFreeCredit: PropTypes.func.isRequired,
};
export default Banner;

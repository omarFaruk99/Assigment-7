import bgimg from "../assets/Images/bg-shadow.png";
import bannerImg from "../assets/Images/banner-main.png";
const Banner = () => {
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
            <div>
              <button className="border-2 border-lime-500 p-3 rounded-2xl relative inline-block">
                <span className="bg-lime-500 p-3 rounded-xl block font-semibold">
                  Clain Free Credit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

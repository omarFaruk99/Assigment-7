import footerLogo from "../assets/Images/logo-footer.png";
const Footer = () => {
  return (
    <div className="relative">
      {/* Newsletter Section */}
      <div className="absolute w-full flex justify-center -top-20">
        <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-500 mb-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-2/3 text-gray-700"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/*footer section  */}
      <footer className="bg-black text-white py-10 pt-36">
        <div className="flex justify-center items-center">
          <img src={footerLogo} alt="" className="mb-4 h-20" />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* About Us Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 ">Subscribe</h3>
            <p className="text-sm mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-black"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-300">
          ©2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

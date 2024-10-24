import { useState } from "react";
import "./App.css";
import Banner from "./Header/Banner";
import Navbar from "./Header/Navbar";
import ToggleBtns from "./ToggleBtn/ToggleBtns";

function App() {
  // toggle btns
  const [toggleBtns, setToggleBtns] = useState(true);

  // toggle btns handler
  const handleToggleBtns = (btn) => {
    if (btn === 1) {
      setToggleBtns(true);
    } else {
      setToggleBtns(false);
    }
    console.log(toggleBtns);
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="mt-14 border-2 border-blue-500">
          <ToggleBtns
            toggleBtns={toggleBtns}
            handleToggleBtns={handleToggleBtns}
          ></ToggleBtns>
        </div>
      </div>
    </>
  );
}

export default App;

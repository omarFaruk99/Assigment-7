import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Banner from "./Header/Banner";
import Navbar from "./Header/Navbar";
import ToggleBtns from "./ToggleBtn/ToggleBtns";
import { toast } from "react-toastify";
import Footer from "./Footer/Footer";

function App() {
  // toggle btns
  const [toggleBtns, setToggleBtns] = useState(true);

  // claim free credit 'useState'
  const [claimCredit, setClaimCredit] = useState(0);

  // toggle btns handler
  const handleToggleBtns = (btn) => {
    if (btn === 1) {
      setToggleBtns(true);
    } else {
      setToggleBtns(false);
    }
  };

  // claim free credit handeler
  const handleFreeCredit = () => {
    const totalAmount = claimCredit + 50;
    // setClaimCredit((previousAmount) => previousAmount + 50);
    toast.success("Succeded to Add Coins!", {
      position: "top-center",
      autoClose: 3000,
    });
    setClaimCredit(totalAmount);
  };

  // Decrease amount
  const decreaseAmout = (choosePlayerAmount) => {
    setClaimCredit((previouseAmount) => previouseAmount - choosePlayerAmount);
  };

  //after delete a player it increase total amount
  const increaseAmount = (deletePlayer) => {
    const updateTotalPrice = claimCredit + deletePlayer.price;
    setClaimCredit(updateTotalPrice);
  };

  //function to deduct money
  // const deductMoney = (playerDeductAmount) =>{
  //   const latestAmount = claimCredit-playerDeductAmount

  // }

  return (
    <>
      <div>
      <div className="w-11/12 mx-auto mb-48">
        <Navbar claimCredit={claimCredit}></Navbar>
        <Banner handleFreeCredit={handleFreeCredit}></Banner>
        <div className="mt-14">
          <ToggleBtns
            toggleBtns={toggleBtns}
            handleToggleBtns={handleToggleBtns}
            claimCredit={claimCredit}
            decreaseAmout={decreaseAmout}
            increaseAmount={increaseAmount}
          ></ToggleBtns>
          <ToastContainer />
        </div>
      </div>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;

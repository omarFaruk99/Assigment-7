import { useState } from "react";
import "./App.css";
import Banner from "./Header/Banner";
import Navbar from "./Header/Navbar";
import ToggleBtns from "./ToggleBtn/ToggleBtns";

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
      <div className="w-11/12 mx-auto">
        <Navbar claimCredit={claimCredit}></Navbar>
        <Banner handleFreeCredit={handleFreeCredit}></Banner>
        <div className="mt-14 border-2 border-blue-500">
          <ToggleBtns
            toggleBtns={toggleBtns}
            handleToggleBtns={handleToggleBtns}
            claimCredit={claimCredit}
            decreaseAmout={decreaseAmout}
            increaseAmount={increaseAmount}
          ></ToggleBtns>
        </div>
      </div>
    </>
  );
}

export default App;

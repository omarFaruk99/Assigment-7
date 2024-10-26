import PropTypes from "prop-types";
import SelectedPlayers from "../assets/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { useState } from "react";

const ToggleBtns = ({
  handleToggleBtns,
  toggleBtns,
  claimCredit,
  decreaseAmout,
  increaseAmount,
}) => {
  // select player
  const [choosePlayer, setChoosePlayer] = useState([]);

  //handle selected player
  const handleChoosePlayer = (singlePlayer) => {
    if (choosePlayer.length >= 6) {
      alert("Don't add more than 6 players");
    } else {
      const isExistPlayer = choosePlayer.find(
        (player) => singlePlayer.id === player.id
      );

      if (singlePlayer.price > claimCredit) {
        alert("Insufficient Balance");
      } else {
        if (isExistPlayer) {
          alert(`${singlePlayer.name} already selected`);
        } else {
          decreaseAmout(singlePlayer.price); //it decrease current player price from the balance
          // ..........................................................
          const newChoosePlayer = [...choosePlayer, singlePlayer];
          setChoosePlayer(newChoosePlayer);
        }
      }
    }
  };

  //handle delete player from selected section
  const handleDeletePlayer = (idDeletePlayer) => {
    // sice we get delete player ID so using 'find' to get the 'player'
    const deletePlayer = choosePlayer.find(
      (player) => player.id == idDeletePlayer
    );

    increaseAmount(deletePlayer); // called  funtion that increase delete playe price in total amount.

    // .................................................................
    // filter's delete player and return ohters player as an array
    const remainingPlayer = choosePlayer.filter(
      (player) => player.id !== idDeletePlayer
    );
    setChoosePlayer(remainingPlayer);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => handleToggleBtns(1)}
          className={`border-2 border-slate-300 p-2 rounded-lg font-semibold ${
            toggleBtns ? "bg-lime-300" : ""
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleToggleBtns(0)}
          className={`border-2 border-slate-300 p-2 rounded-lg font-semibold ${
            toggleBtns ? "" : "bg-lime-300"
          }`}
        >
          Selected({choosePlayer.length})
        </button>
      </div>

      {toggleBtns ? (
        <AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          choosePlayer={choosePlayer}
          handleDeletePlayer={handleDeletePlayer}
          handleToggleBtns ={handleToggleBtns}

        ></SelectedPlayers>
      )}
    </div>
  );
};

ToggleBtns.propTypes = {
  handleToggleBtns: PropTypes.func.isRequired,
  toggleBtns: PropTypes.bool.isRequired,
  decreaseAmout: PropTypes.func.isRequired,
  claimCredit: PropTypes.number.isRequired,
  increaseAmount: PropTypes.func.isRequired,
};

export default ToggleBtns;

import PropTypes from "prop-types";
import SelectedPlayers from "../assets/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { useState } from "react";

const ToggleBtns = ({ handleToggleBtns, toggleBtns }) => {
  // select player
  const [choosePlayer, setChoosePlayer] = useState([]);

  //handle selected player
  const handleChoosePlayer = (singlePlayer) => {
    const isExistPlayer = choosePlayer.find(
      (player) => singlePlayer.id === player.id
    );

    if (isExistPlayer) {
      alert(`${singlePlayer.name} already selected`);
    } else {
      const newChoosePlayer = [...choosePlayer, singlePlayer];
      setChoosePlayer(newChoosePlayer);
    }
  };

  //handle delete player from selected section
  const handleDeletePlayer = (idDeletePlayer) => {
    // it filter delete player and return ohters player as an array
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
        ></SelectedPlayers>
      )}
    </div>
  );
};

ToggleBtns.propTypes = {
  handleToggleBtns: PropTypes.func.isRequired,
  toggleBtns: PropTypes.bool.isRequired,
};

export default ToggleBtns;

import PropTypes from "prop-types";
import SelectedPlayers from "../assets/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { useState } from "react";

const ToggleBtns = ({ handleToggleBtns, toggleBtns }) => {
  // choose player
  const [choosePlayer, setChoosePlayer] = useState([]);

  //choose player handlder
  const handleChoosePlayer = (singlePlayer) => {
    const newChoosePlayer = [...choosePlayer, singlePlayer];
    setChoosePlayer(newChoosePlayer);
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
        <SelectedPlayers choosePlayer={choosePlayer}></SelectedPlayers>
      )}
    </div>
  );
};

ToggleBtns.propTypes = {
  handleToggleBtns: PropTypes.func.isRequired,
  toggleBtns: PropTypes.bool.isRequired,
};

export default ToggleBtns;

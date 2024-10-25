import PropTypes from "prop-types";
import SelectedPlayers from "../assets/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const ToggleBtns = ({ handleToggleBtns, toggleBtns }) => {
  //   console.log(handleToggleBtns);
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
          Selected(0)
        </button>
      </div>

      {toggleBtns ? (
        <AvailablePlayers></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

ToggleBtns.propTypes = {
  handleToggleBtns: PropTypes.func.isRequired,
  toggleBtns: PropTypes.bool.isRequired,
};

export default ToggleBtns;

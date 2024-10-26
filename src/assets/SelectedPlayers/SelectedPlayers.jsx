import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
const SelectedPlayers = ({
  choosePlayer,
  handleDeletePlayer,
  handleToggleBtns,
}) => {
  // console.log(choosePlayer);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">
        Selected Players({choosePlayer.length}/9)
      </h1>
      {choosePlayer.map((player, idx) => (
        <div
          key={idx}
          className="flex border-2 border-gray-300 items-center p-6 space-x-6 mb-4 rounded-xl "
        >
          <img src={player.img} alt="" className="w-28 h-20 rounded-lg" />
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-semibold text-2xl">{player.name}</h2>
              <p className="text-gray-500">{player.role}</p>
              <p className="text-gray-500">Price: ${player.price}</p>
            </div>
            <div>
              <button onClick={() => handleDeletePlayer(player.id)}>
                <MdDelete size={30} color="red" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="border-2 border-lime-300 p-2 inline-block rounded-lg bg-lime-50">
        <button
          onClick={() => handleToggleBtns(1)}
          className="bg-lime-300 p-3 rounded-lg font-medium"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  choosePlayer: PropTypes.array.isRequired,
  handleDeletePlayer: PropTypes.func.isRequired,
  handleToggleBtns: PropTypes.func.isRequired,
};

export default SelectedPlayers;

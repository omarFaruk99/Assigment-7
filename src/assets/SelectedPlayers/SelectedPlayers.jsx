import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
const SelectedPlayers = ({ choosePlayer, handleDeletePlayer }) => {
  console.log(choosePlayer);
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
            </div>
            <div>
              <button onClick={() => handleDeletePlayer(player.id)}>
                <MdDelete size={30} color="red" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  choosePlayer: PropTypes.array.isRequired,
  handleDeletePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers;

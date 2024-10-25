import { useEffect } from "react";
import { useState } from "react";

const AvailablePlayers = () => {
  // avaiable player
  const [availablePlayers, setavailablePlayers] = useState([]);

  // fetch the data
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setavailablePlayers(data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">AvailablePlayers.jsx</h1>
      {availablePlayers.map((singPlayer, indx) => {
        return (
          <div key={indx} className="border-2 border-gray-300 rounded-xl p-2">
            <div className="card">
              <img
                src={singPlayer.img}
                alt=""
                className="w-full rounded-xl mb-2"
              />
              <div>
                <h2 className="font-semibold text-xl">{singPlayer.name}</h2>
              </div>
              <div className="flex justify-between mt-3 mb-3">
                <p>{singPlayer.country}</p>
                <p className="bg-gray-200 rounded-lg py-1 px-2 text-gray-500">{singPlayer.role}</p>
              </div>
              <hr />
              <div className="mt-3">
                <h2 className="font-bold">Rating</h2>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500">{singPlayer.batting_style}</p>
                  <p className="text-gray-500">{singPlayer.bowling_style}</p>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500">Price: ${singPlayer.price}</p>
                  <button className="border-2 border-stone-300 px-2 py-1 rounded-md text-gray-500 font-medium">
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;

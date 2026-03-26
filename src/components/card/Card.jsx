import { CircleUserRound, Flag } from 'lucide-react';
import React from 'react';

const Card = ({ playerData }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {playerData.map((player,index) => (
        <div key={index} className="card bg-base-100 shadow-sm">
          <figure className="px-6 pt-6">
            <img
              src={player.playerImg}
              alt={player.playerName}
              className="rounded-xl border border-blue-300"
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title font-bold flex items-center gap-2">
              <CircleUserRound /> {player.playerName}
            </h2>
            <div className="flex justify-between items-center">
              <p className="flex gap-1 text-[0.9rem] text-gray-400 font-medium">
                <Flag /> {player.playerCountry}
              </p>
              <button className="btn">{player.playerType}</button>
            </div>
            <div className="divider"></div>
            <h2 className="text-[1rem] font-bold">Rating</h2>
            <div className="flex justify-between">
              <h2 className="text-[1rem] font-bold">{player.battingStyle}</h2>
              <h2 className="text-[1rem] text-gray-400 font-medium">
                {player.bowlingStyle}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[1rem] font-bold">Price: ${player.price}</h2>
              <button className="btn bg-white">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

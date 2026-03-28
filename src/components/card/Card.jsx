import { CircleUserRound, Flag } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({playerInfo, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
  const[isSelected, setIsSelected] = useState(false);
  const cardBtn = () =>{
    setIsSelected(true);
    const newCoin = coin - playerInfo.price;
    if(newCoin >= 0){
      alert(`${playerInfo.playerName} is selected`);
      setCoin(newCoin);
    }
    else{
      alert("Not enough coin");
      return;
    }
  }
  return (
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-6 pt-6">
            <img
              src={playerInfo.playerImg}
              alt={playerInfo.playerName}
              className="rounded-xl border border-blue-300"
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title font-bold flex items-center gap-2">
              <CircleUserRound /> {playerInfo.playerName}
            </h2>
            <div className="flex justify-between items-center">
              <p className="flex gap-1 text-[0.9rem] text-gray-400 font-medium">
                <Flag /> {playerInfo.playerCountry}
              </p>
              <button className="btn">{playerInfo.playerType}</button>
            </div>
            <div className="divider"></div>
            <h2 className="text-[1rem] font-bold">Rating</h2>
            <div className="flex justify-between">
              <h2 className="text-[1rem] font-bold">{playerInfo.battingStyle}</h2>
              <h2 className="text-[1rem] text-gray-400 font-medium">
                {playerInfo.bowlingStyle}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[1rem] font-bold">Price: ${playerInfo.price}</h2>
              <button 
              onClick={cardBtn} 
              className="btn bg-white" disabled={isSelected}>
                {isSelected?'Selected':'Choose Player'}
                </button>
            </div>
          </div>
        </div>
    
  );
};

export default Card;

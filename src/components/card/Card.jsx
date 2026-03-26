import { CircleUserRound, Flag } from 'lucide-react';
import React from 'react';
const Card = ({ players }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-6 pt-6">
                <img
                    src={players.playerImg}
                    alt="Shoes"
                    className="rounded-xl border border-blue-300" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title font-bold"><CircleUserRound />{players.playerName}</h2>
                <div className='flex justify-between items-center'>
                    <p className='flex gap-1 text-[0.9rem] text-gray-400 font-medium'><Flag />{players.playerCountry}</p>
                    <button className='btn'>{players.playerType}</button>
                </div>
                <div className="divider"></div>
                <h2 className='text-[1rem] font-bold'>Rating</h2>
                <div className='flex justify-between'>
                    <h2 className='text-[1rem] font-bold'>{players.battingStyle}</h2>
                    <h2 className='text-[1rem] text-gray-400 font-medium'>{players.bowlingStyle}</h2>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className='text-[1rem] font-bold'>Price: ${players.price}</h2>
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
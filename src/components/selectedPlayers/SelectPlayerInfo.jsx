import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const SelectPlayerInfo = ({player,selectedPlayers,setSelectedPlayers,coin, setCoin}) => {
    const deletePlayerHandler = (player)=>{
        const filteredPlayers = selectedPlayers.filter((deletePlayer) => deletePlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin+player.price);
        toast.info(`${player.playerName} player remove successfully & ${player.price} coin added`);
    }
    return (
        <div className='flex justify-between items-center my-5'>
            <div className='flex gap-5 items-center'>
                <div className='h-25 w-25 border border-blue-400 rounded-2xl'>
                    <img className='w-full rounded-2xl'  src={player.playerImg} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{player.playerName}</h2>
                    <p className='text-[1rem] text-gray-400'>{player.battingStyle}</p>
                </div>
            </div>
            <div className='text-red-400'>
                <button onClick={()=> deletePlayerHandler(player)} className='cursor-pointer'><Trash2 /></button>
            </div>
        </div>
    );
};

export default SelectPlayerInfo;
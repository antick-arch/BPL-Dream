import React from 'react';
import SelectPlayerInfo from './SelectPlayerInfo';

const SelectPage = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    return (
        <div>
            {
                selectedPlayers.length === 0 ?
                <div className='bg-gray-100 rounded-xl h-100 w-full flex flex-col justify-center items-center gap-3'>
                    <h2 className='font-bold text-2xl'>No player selected yet</h2>
                    <p className='text-gray-400 text-[1rem]'>Go to Available tab to select players</p>
                </div>
                :
                selectedPlayers.map((player,index) => <SelectPlayerInfo key={index} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectPlayerInfo>)
            }
        </div>
    );
};

export default SelectPage;
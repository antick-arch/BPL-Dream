import React from 'react';
import SelectPlayerInfo from './SelectPlayerInfo';

const SelectPage = ({selectedPlayers,setSelectedPlayers}) => {
    return (
        <div>
            {
                selectedPlayers.map((player,index) => <SelectPlayerInfo key={index} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectPlayerInfo>)
            }
        </div>
    );
};

export default SelectPage;
import React from 'react';
import Card from '../card/Card';

const Players = ({playerData, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                playerData.map((playerInfo,index) =>{
                    return(
                        <Card key={index} playerInfo={playerInfo} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                    )
                })
            }
        </div>
    );
};

export default Players;
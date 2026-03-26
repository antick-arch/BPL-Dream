import React from 'react';
import { use } from 'react';
import Card from '../card/Card';
const AvailablePlayers = ({ fetchPlayerPromise }) => {
        const playerData = use(fetchPlayerPromise).data;
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                playerData.map((players,index)=> <Card key={index} players={players}></Card>)
            }
        </div>
    );
};

export default AvailablePlayers;
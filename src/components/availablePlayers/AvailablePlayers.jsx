import { use, useState } from 'react';
import Card from '../card/Card';
import Players from './Players';
import SelectPage from '../selectedPlayers/SelectPage';
const AvailablePlayers = ({ fetchPlayerPromise, coin, setCoin }) => {
    const playerData = use(fetchPlayerPromise).data;
    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    return (
        <div>
            <div className='flex items-center justify-between my-6'>
                {selectedType === 'available'?(<h2 className='font-bold text-3xl'>Available Players</h2>):(<h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{playerData.length})</h2>)}
                <div className='flex items-center'>
                    <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} border-none rounded-l-xl rounded-r-none`}>Available</button>
                    <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} border-none rounded-r-xl rounded-l-none`}>Selected <span>({selectedPlayers.length})</span></button>
                </div>
            </div>


            {selectedType === 'available'?
            (<Players playerData={playerData} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Players>):
            (<SelectPage selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectPage>)}
        </div>
    );
};

export default AvailablePlayers;
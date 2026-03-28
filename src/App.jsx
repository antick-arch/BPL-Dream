import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import AvailablePlayers from './components/availablePlayers/AvailablePlayers';
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const fetchPlayerPromise = axios.get('playerData.json');
function App() {
  const[coin,setCoin] = useState(300000);
  return (
    <>
    <header className='container mx-auto space-y-3'>
      <nav>
      <Navbar coin={coin}></Navbar>
    </nav>
    <section>
      <Banner></Banner>
    </section>
    </header>
    <main className='container mx-auto'>
      <section>
      <Suspense fallback={<div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>}>
        <AvailablePlayers coin={coin} setCoin={setCoin} fetchPlayerPromise = {fetchPlayerPromise}></AvailablePlayers>
      </Suspense>
    </section>
    </main>
    <ToastContainer />
    </>
  )
}

export default App

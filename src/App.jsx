import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import AvailablePlayers from './components/availablePlayers/AvailablePlayers';
import { Suspense } from 'react';

const fetchPlayerPromise = axios.get('playerData.json');
function App() {

  return (
    <>
    <header className='container mx-auto space-y-3'>
      <nav>
      <Navbar></Navbar>
    </nav>
    <section>
      <Banner></Banner>
    </section>
    </header>
    <main className='container mx-auto'>
      <section>
      <Suspense fallback={<div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>}>
        <AvailablePlayers fetchPlayerPromise = {fetchPlayerPromise}></AvailablePlayers>
      </Suspense>
    </section>
    </main>
    </>
  )
}

export default App

import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';

const fetchPlayerPromise = axios.get('playerData.json');
function App() {

  return (
    <>
    <header className='max-w-11/12 mx-auto'>
      <nav>
      <Navbar fetchPlayerPromise = {fetchPlayerPromise}></Navbar>
    </nav>
    <section>
      <Banner></Banner>
    </section>
    </header>
    </>
  )
}

export default App

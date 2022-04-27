import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPlayers from './Pages/AddPlayers/AddPlayers';
import Home from './Pages/Home/Home';
import Manage from './Pages/Manage/Manage';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <main className="App bg-14-bpl-dark-blue min-h-screen font-poppins">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage' element={<Manage />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
      </Routes>
    </main>
  );
}

export default App;

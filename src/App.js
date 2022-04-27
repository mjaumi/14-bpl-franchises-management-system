import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    </main>
  );
}

export default App;

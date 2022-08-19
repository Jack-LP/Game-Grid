import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='browse' element={<Browse />} />
        <Route path='game/:gameId' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

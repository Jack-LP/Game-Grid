import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Game from './pages/Game';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          headers: {
            'X-RapidAPI-Key':
              '8ebe34813bmsh6e275fbf0f07504p1b7a10jsne2f604a9e8cb',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      );
      localStorage.setItem('gameData', JSON.stringify(result.data));
      setIsLoading(false);
    };

    if (JSON.parse(localStorage.getItem('gameData'))) {
      setIsLoading(false);
    } else {
      fetchGames();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              gameData={JSON.parse(localStorage.getItem('gameData'))}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path='browse'
          element={
            <Browse
              gameData={JSON.parse(localStorage.getItem('gameData'))}
              isLoading={isLoading}
            />
          }
        />
        <Route path='browse/game/:gameId' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

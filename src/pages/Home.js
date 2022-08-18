import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import GameGrid from '../components/GameGrid';
import Featured from '../components/home/Featured';
import Banner from '../components/home/Banner';

const Home = () => {
  const [gameData, setGameData] = useState([]);
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
      setGameData(result.data);
      setIsLoading(false);
    };

    fetchGames();
  }, []);

  return isLoading ? (
    <Box
      w='100vw'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Spinner size='xl' />
    </Box>
  ) : (
    <Box>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Featured gameData={gameData} />
        <Banner />
        <GameGrid gameData={gameData} displayCount={30} />
      </Flex>
    </Box>
  );
};

export default Home;

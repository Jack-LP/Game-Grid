import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import GameGrid from '../components/GameGrid';
import Featured from '../components/Featured';

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
    <Box>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Spinner alignSelf='center' mb='600px' />
      </Flex>
    </Box>
  ) : (
    <Box bgColor='gray.700'>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Featured gameData={gameData} />
        <GameGrid gameData={gameData} displayCount={30} />
      </Flex>
    </Box>
  );
};

export default Home;

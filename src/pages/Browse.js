import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Refine from '../components/Refine';
import GameGrid from '../components/GameGrid';
import FilterList from '../components/browse/FilterList';

const Browse = () => {
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
    <Box bgColor='gray.700' mt='100px'>
      <Flex direction='column' gap='10'>
        <Navbar />
        <FilterList />
        <GameGrid gameData={gameData} displayCount={359} />
      </Flex>
    </Box>
  );
};

export default Browse;

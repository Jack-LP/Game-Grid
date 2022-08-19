import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Spinner, Container } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import GameGrid from '../components/common/GameGrid';
import FilterList from '../components/browse/FilterList';
import Banner from '../components/home/Banner';

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
    <Box mt='100px'>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Banner />
        <Container maxW='1200px' p='0'>
          <Flex gap='4'>
            <FilterList />
            <GameGrid gameData={gameData} displayCount={50} thumbSize={300} />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Browse;

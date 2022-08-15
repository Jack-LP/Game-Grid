import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Refine from '../components/Refine';
import Featured from '../components/Featured';
import GameGrid from '../components/GameGrid';

export default function Home() {
  const [gameData, setGameData] = useState([]);

  // Axios request for game data
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': '8ebe34813bmsh6e275fbf0f07504p1b7a10jsne2f604a9e8cb',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <Box bgColor='gray.700'>
      <Head>
        <title>GameGrid</title>
      </Head>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Refine />
        <Featured />
        <GameGrid gameData={gameData} />
      </Flex>
    </Box>
  );
}

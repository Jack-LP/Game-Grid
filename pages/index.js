import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { gameData } from '../gameData';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Refine from '../components/Refine';
import Featured from '../components/Featured';
import GameGrid from '../components/GameGrid';

export default function Home() {
  console.log(gameData);

  return (
    <Box bgColor='gray.700'>
      <Head>
        <title>GameGrid</title>
      </Head>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Refine />
        <Featured gameData={gameData} />
        <GameGrid gameData={gameData} />
      </Flex>
    </Box>
  );
}

import React from 'react';
import GameCard from './GameCard';
import { Container } from '@chakra-ui/react';

function getDisplayGames(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const GameGrid = () => {
  // const displayGames = getDisplayGames(gameData, 6);
  // const gameCards = displayGames.map((card) => <GameCard />);
  return (
    <Container
      maxW='1200px'
      display='flex'
      flexWrap='wrap'
      p='0'
      justifyContent='space-between'
    ></Container>
  );
};

export default GameGrid;

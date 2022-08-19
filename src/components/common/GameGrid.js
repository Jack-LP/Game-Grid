import React from 'react';
import GameCard from './GameCard';
import { Container } from '@chakra-ui/react';

const GameGrid = ({ gameData, displayCount, thumbSize }) => {
  const getDisplayGames = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const displayGames = getDisplayGames(gameData, displayCount);
  const gameCards = displayGames.map((card) => (
    <GameCard
      cardImg={card.thumbnail}
      cardTitle={card.title}
      key={card.id}
      thumbSize={thumbSize}
      platform={card.platform}
      cardId={card.id}
    />
  ));

  return (
    <Container
      maxW='1200px'
      display='flex'
      flexWrap='wrap'
      p='0'
      justifyContent='space-between'
    >
      {gameCards}
    </Container>
  );
};
export default GameGrid;

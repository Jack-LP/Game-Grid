import React from 'react';
import { Container, useTab } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = ({ gameData, thumbSize, randomGames }) => {
  const getDisplayGames = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const displayGames = getDisplayGames(gameData, 30);

  const gameCards = randomGames
    ? displayGames.map((card) => (
        <GameCard
          cardImg={card.thumbnail}
          cardTitle={card.title}
          key={card.id}
          thumbSize={thumbSize}
          platform={card.platform}
          cardId={card.id}
        />
      ))
    : gameData.map((card) => (
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
      gap='4'
      justifyContent='center'
    >
      {gameCards}
    </Container>
  );
};
export default GameGrid;

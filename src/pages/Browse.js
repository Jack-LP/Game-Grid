import React, { useState } from 'react';
import useDocumentTitle from '../useDocumentTitle';
import { Box, Flex, Spinner, Container } from '@chakra-ui/react';
import GenreFilterCard from '../components/browse/GenreFilterCard';
import Search from '../components/browse/Search';
import GameGrid from '../components/common/GameGrid';

const Browse = ({ gameData, isLoading }) => {
  const [filteredGameData, setFilteredGameData] = useState(gameData);
  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const updateFilteredGameData = (filter) => {
    filter === 'All'
      ? setFilteredGameData(gameData)
      : setFilteredGameData(gameData.filter((game) => game.genre === filter));
  };

  useDocumentTitle('Game Grid | Browse');
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
    <Container
      mt='100px'
      maxW={['90vw', null, null, '1200px']}
      p='0'
      minH='100vh'
    >
      <Flex gap='4' direction={['column', null, null, 'row']}>
        <Flex direction='column' gap='4'>
          <Search updateSearchValue={updateSearchValue} />
          <GenreFilterCard
            setFilteredGameData={setFilteredGameData}
            updateFilteredGameData={updateFilteredGameData}
            gameData={gameData}
            filterValues={[
              'MMORPG',
              'Shooter',
              'MOBA',
              'Battle Royale',
              'Strategy',
              'Racing',
              'Fighting',
              'Social',
              'Sports',
            ]}
          />
        </Flex>
        <GameGrid
          gameData={filteredGameData.filter((val) => {
            if (searchValue === '') {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          })}
          thumbSize={300}
        />
      </Flex>
    </Container>
  );
};

export default Browse;

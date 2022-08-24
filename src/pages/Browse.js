import React, { useState } from 'react';
import useDocumentTitle from '../useDocumentTitle';
import { Box, Flex, Spinner, Container } from '@chakra-ui/react';
import GameGrid from '../components/common/GameGrid';
import GenreFilterCard from '../components/browse/GenreFilterCard';

const Browse = ({ gameData, isLoading }) => {
  const [filteredGameData, setFilteredGameData] = useState(gameData);
  const [filter, setFilter] = useState();

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
    <Box mt='100px'>
      <Flex direction='column' gap='10'>
        <Container maxW='1200px' p='0'>
          <Flex gap='4'>
            <GenreFilterCard
              setFilter={setFilter}
              filter={filter}
              setFilteredGameData={setFilteredGameData}
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
            <GameGrid
              gameData={filteredGameData}
              displayCount={359}
              thumbSize={300}
            />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Browse;

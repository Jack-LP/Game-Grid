import React, { useState } from 'react';
import useDocumentTitle from '../useDocumentTitle';
import { Box, Flex, Spinner, Container, Button } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import GameGrid from '../components/common/GameGrid';
import FilterList from '../components/browse/FilterList';
import Banner from '../components/home/Banner';

const Browse = ({ gameData, isLoading }) => {
  const [filteredData, setFilteredData] = useState(gameData);

  const updateFilters = (checked, filterName, filterValue) => {
    if (checked) {
      setFilteredData(
        gameData.filter(function (obj) {
          return obj.filterName === filterValue;
        })
      );
    }
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
    <Box mt='100px'>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Banner />
        <Container maxW='1200px' p='0'>
          <Flex gap='4'>
            <FilterList updateFilters={updateFilters} />
            <GameGrid
              gameData={filteredData}
              displayCount={10}
              thumbSize={300}
            />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Browse;

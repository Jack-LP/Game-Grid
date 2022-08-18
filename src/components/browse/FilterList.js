import React from 'react';
import { Flex } from '@chakra-ui/react';
import Filter from './Filter';

const FilterList = ({ filterGames }) => {
  return (
    <Flex flexDirection='column' gap='4'>
      <Filter title='Platform' filterGames={filterGames} />
    </Flex>
  );
};

export default FilterList;

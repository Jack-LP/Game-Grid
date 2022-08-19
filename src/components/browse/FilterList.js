import React from 'react';
import { Flex } from '@chakra-ui/react';
import Filter from './Filter';

const FilterList = () => {
  return (
    <Flex flexDirection='column' gap='4'>
      <Filter title='Platform' />
    </Flex>
  );
};

export default FilterList;

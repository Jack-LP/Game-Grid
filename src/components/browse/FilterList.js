import React from 'react';
import { Flex } from '@chakra-ui/react';
import Filter from './Filter';

const FilterList = ({ updateFilters }) => {
  return (
    <Flex flexDirection='column' gap='4'>
      <Filter
        updateFilters={updateFilters}
        title='Platform'
        filters={['PC (Windows)', 'Web Browser']}
      />
    </Flex>
  );
};

export default FilterList;

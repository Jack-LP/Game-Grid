import React from 'react';
import { Flex } from '@chakra-ui/react';
import FilterCard from './FilterCard';

const FilterSection = ({ updateFilters }) => {
  return (
    <Flex flexDirection='column' gap='4'>
      <FilterCard filterKey={'platform'} updateFilters={updateFilters} />
    </Flex>
  );
};

export default FilterSection;

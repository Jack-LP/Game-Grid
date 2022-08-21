import React from 'react';
import { Flex, Text, CheckboxGroup } from '@chakra-ui/react';
import Filter from './Filter';

const FilterCard = ({ filterKey, updateFilters }) => {
  return (
    <Flex
      direction='column'
      bg='gray.800'
      gap='4'
      p='4'
      rounded='md'
      minW='200px'
    >
      <Text>{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</Text>
      <CheckboxGroup>
        <Filter
          filterKey={filterKey}
          filterValue={'PC (Windows)'}
          updateFilters={updateFilters}
        />
        <Filter
          filterKey={filterKey}
          filterValue={'Web Browser'}
          updateFilters={updateFilters}
        />
      </CheckboxGroup>
    </Flex>
  );
};

export default FilterCard;

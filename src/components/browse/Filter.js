import React from 'react';
import { Flex, Text, CheckboxGroup, Checkbox } from '@chakra-ui/react';

const Filter = ({ title, filters, updateFilters }) => {
  const filterTitle = title.toLowerCase();
  return (
    <Flex
      direction='column'
      bg='gray.800'
      gap='4'
      p='4'
      rounded='md'
      minW='200px'
    >
      <Text fontSize='xl'>{title}</Text>
      <CheckboxGroup>
        {filters.map((item) => (
          <Checkbox
            key={Math.floor(Math.random() * 1000)}
            onChange={(e) => updateFilters(e.target.checked, filterTitle, item)}
          >
            {item}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Flex>
  );
};

export default Filter;

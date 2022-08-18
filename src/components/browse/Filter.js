import React from 'react';
import { Flex, Text, CheckboxGroup, Checkbox } from '@chakra-ui/react';

const Filter = ({ title, filterGames }) => {
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
        <Checkbox onChange={() => filterGames()}>PC</Checkbox>
        <Checkbox>Browser</Checkbox>
      </CheckboxGroup>
    </Flex>
  );
};

export default Filter;

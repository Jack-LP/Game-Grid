import React, { useState } from 'react';
import { Flex, Text, CheckboxGroup, Checkbox } from '@chakra-ui/react';

const platforms = [
  {
    id: 1,
    name: 'PC (Windows)',
  },
  {
    id: 2,
    name: 'Web Browser',
  },
];

const Filter = ({ title }) => {
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
        {platforms.map((item) => (
          <Checkbox key={item.id}>{item.name}</Checkbox>
        ))}
      </CheckboxGroup>
    </Flex>
  );
};

export default Filter;

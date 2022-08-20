import React from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';

const Description = ({ currentGameData }) => {
  return (
    <Flex direction='column' bgColor='gray.800' rounded='md' p='4' gap='4'>
      <Text fontSize='xl'>Description</Text>
      <Divider w='50%' />
      <Text lineHeight='1.6'>{currentGameData.description}</Text>
    </Flex>
  );
};

export default Description;

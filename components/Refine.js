import React from 'react';
import { Text, Container } from '@chakra-ui/react';

const Refine = () => {
  return (
    <Container
      maxW='1200px'
      bg='gray.800'
      rounded='md'
      display='flex'
      justifyContent='space-around'
      p='2'
    >
      <Text>Platform</Text>
      <Text>Category</Text>
      <Text>Coming Soon</Text>
    </Container>
  );
};

export default Refine;

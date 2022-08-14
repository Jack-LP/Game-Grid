import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg='gray.800'>
      <Container
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        maxW='1200px'
        p='3'
      >
        <Text fontSize='2xl'>Game Grid</Text>
        <Text fontSize='xl'>Browse</Text>
        <Text fontSize='xl'>Search</Text>
      </Container>
    </Box>
  );
};

export default Navbar;

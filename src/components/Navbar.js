import React from 'react';
import { Box, Text, Container, Input, Flex } from '@chakra-ui/react';

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
        <Flex justifyContent='flex-end' alignItems='center' gap='4'>
          <Text fontSize='xl'>Browse</Text>
          <Input variant='filled' placeholder='Search' maxW='60%' />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

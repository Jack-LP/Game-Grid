import React from 'react';
import { Box, Text, Container, Input, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg='gray.800'>
      <Container
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        maxW='1200px'
        paddingInline='0'
        paddingBlock='3'
      >
        <Text fontSize='2xl'>Game Grid</Text>
        <Flex alignItems='center' gap='4'>
          <Link to='/'>
            <Button variant='ghost'>Home</Button>
          </Link>
          <Link to='/browse'>
            <Button variant='ghost'>Browse</Button>
          </Link>
          <Button variant='ghost'>Random</Button>
        </Flex>
        <Input variant='filled' placeholder='Search' width='200px' />
      </Container>
    </Box>
  );
};

export default Navbar;

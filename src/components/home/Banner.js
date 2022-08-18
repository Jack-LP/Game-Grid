import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, Button } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Container
      maxW='1200px'
      p='0'
      borderBlock='2px solid'
      borderColor='whiteAlpha.200'
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='4'
      paddingBlock='4'
      rounded='md'
    >
      <Text fontSize='3xl'>Browse hundreds of free games</Text>
      <Link to='/browse'>
        <Button variant='outline'>Take me there</Button>
      </Link>
    </Container>
  );
};

export default Banner;

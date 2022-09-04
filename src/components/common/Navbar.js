import React from 'react';
import { Box, Container, Input, Flex, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import gameGridLogo from './img/gameGridLogo.svg';

const Navbar = () => {
  const gameData = JSON.parse(localStorage.getItem('gameData'));

  return (
    <Box
      bg='#1c1f2390'
      shadow='lg'
      position='fixed'
      zIndex='1'
      width='100%'
      top='0'
      backdropFilter='auto'
      backdropBlur='8px'
    >
      <Container
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        maxW='1200px'
        paddingInline='0'
        paddingBlock='3'
      >
        <Flex gap='4'>
          <Link to='/'>
            <Button variant='ghost'>Home</Button>
          </Link>
          <Link to='/browse'>
            <Button variant='ghost'>Browse</Button>
          </Link>
        </Flex>
        <Image maxW='300px' src={gameGridLogo} />
        <Input
          width='auto'
          placeholder='Search'
          focusBorderColor='purple.700'
          variant='filled'
          rounded='full'
        />
      </Container>
    </Box>
  );
};

export default Navbar;

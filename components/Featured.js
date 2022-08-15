import React from 'react';
import Image from 'next/image';
import FeaturedImg from '../public/featured.jpg';
import { Box, Container, Text, Badge } from '@chakra-ui/react';

const Featured = () => {
  return (
    <Container maxW='1200px' display='flex' p='0'>
      <Box maxW='800px'>
        <Image
          src={FeaturedImg}
          layout='intrinsic'
          alt='Featured Image'
          style={{ borderRadius: '10px' }}
        />
      </Box>
      <Box pl='10'>
        <Text fontSize='3xl'>Genshin Impact</Text>
        <Text fontSize='xl'>Now Available</Text>
        <Badge>FREE</Badge>
      </Box>
    </Container>
  );
};

export default Featured;

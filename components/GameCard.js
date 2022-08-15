import React from 'react';
import ThumbnailImg from '../public/thumbnail.jpg';
import Image from 'next/dist/client/image';
import { Box, Flex, Text, Tag } from '@chakra-ui/react';

const GameCard = () => {
  return (
    <Box display='flex' flexDirection='column' maxW='365px' mb='8'>
      <Image
        src={ThumbnailImg}
        alt='Game Thumbnail'
        layout='fixed'
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <Flex justify='space-between' p='2' bgColor='gray.800' roundedBottom='10'>
        <Text>Genshin Impact</Text>
        <Tag>FREE</Tag>
      </Flex>
    </Box>
  );
};

export default GameCard;

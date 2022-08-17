import React from 'react';
import { Box, Flex, Text, Tag, Image } from '@chakra-ui/react';

const GameCard = ({ cardImg, cardTitle }) => {
  return (
    <Box display='flex' flexDirection='column' maxW='365px' mb='8'>
      <Image
        src={cardImg}
        alt='Game Thumbnail'
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <Flex justify='space-between' p='2' bgColor='gray.800' roundedBottom='10'>
        <Text>{cardTitle}</Text>
        <Tag>FREE</Tag>
      </Flex>
    </Box>
  );
};

export default GameCard;

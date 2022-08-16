import React from 'react';
import Image from 'next/dist/client/image';
import { Box, Flex, Text, Tag, Spinner } from '@chakra-ui/react';

const GameCard = ({ cardImg, cardTitle }) => {
  return (
    <Box display='flex' flexDirection='column' maxW='365px' mb='8'>
      {cardImg ? (
        <Image
          src={cardImg}
          alt='Game Thumbnail'
          width='365px'
          height='206px'
          layout='fixed'
          style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
      ) : (
        <Box
          width='365px'
          height='206px'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Spinner />
        </Box>
      )}
      <Flex justify='space-between' p='2' bgColor='gray.800' roundedBottom='10'>
        <Text>{cardTitle}</Text>
        <Tag>FREE</Tag>
      </Flex>
    </Box>
  );
};

export default GameCard;

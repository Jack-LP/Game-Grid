import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const GameBanner = ({ currentGameData }) => {
  return (
    <Box overflow='hidden'>
      <Image
        src={currentGameData.thumbnail}
        width='100%'
        height='45vh'
        fit='cover'
        filter='auto'
        blur='5px'
      />
    </Box>
  );
};

export default GameBanner;

import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const GameBanner = ({ currentGameData }) => {
  return (
    <Box overflow='hidden' marginInline='-5px'>
      <Image
        src={
          // currentGameData.screenshots.length === 0
          //   ? currentGameData.thumbnail
          //   : currentGameData.screenshots[0].image
          currentGameData.thumbnail
        }
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

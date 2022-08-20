import React from 'react';
import { Box } from '@chakra-ui/react';

const GameBanner = ({ currentGameData }) => {
  return (
    <Box overflow='hidden'>
      <Box
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7861345221682423) 0%, rgba(255,255,255,0) 100%), url(${currentGameData.thumbnail})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        width='100vw'
        height='45vh'
        filter='auto'
        blur='5px'
      ></Box>
    </Box>
  );
};

export default GameBanner;

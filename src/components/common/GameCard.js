import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Tag, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faComputer } from '@fortawesome/free-solid-svg-icons';

const GameCard = ({ cardImg, cardTitle, thumbSize, platform, cardId }) => {
  return (
    <Box display='flex' flexDirection='column' mb='8'>
      <Image
        src={cardImg}
        alt='Game Thumbnail'
        roundedTop='10'
        width={thumbSize}
      />
      <Flex
        justifyContent='space-between'
        p='2'
        bgColor='gray.800'
        roundedBottom='10'
      >
        <Link to={`game/${cardId}`}>
          <Text
            maxW='210px'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'
          >
            {cardTitle}
          </Text>
        </Link>
        <Flex alignItems='center' gap='2'>
          <FontAwesomeIcon
            icon={platform === 'PC (Windows)' ? faComputer : faGlobe}
          />
          <Tag>FREE</Tag>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GameCard;

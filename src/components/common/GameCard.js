import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Tag } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faComputer } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './css/lazyLoadImage.css';

const GameCard = ({ cardImg, cardTitle, thumbSize, platform, cardId }) => {
  return (
    <Box display='flex' flexDirection='column' mb='4'>
      <Link to={`/game/${cardId}`}>
        <LazyLoadImage
          effect='blur'
          wrapperClassName='lazyLoadImage'
          src={cardImg}
          width={thumbSize}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </Link>
      <Flex
        justifyContent='space-between'
        p='2'
        bgColor='charcoal.800'
        roundedBottom='10'
      >
        <Link to={`/game/${cardId}`}>
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
          {platform === 'PC (Windows)' ? (
            <FontAwesomeIcon icon={faComputer} />
          ) : platform === 'Web Browser' ? (
            <FontAwesomeIcon icon={faGlobe} />
          ) : (
            <Flex alignItems='center' gap='2'>
              <FontAwesomeIcon icon={faComputer} />
              <FontAwesomeIcon icon={faGlobe} />
            </Flex>
          )}
          <Tag>FREE</Tag>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GameCard;

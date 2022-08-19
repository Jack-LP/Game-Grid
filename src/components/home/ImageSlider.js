import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleDot,
  faCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const cycleImages = setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearTimeout(cycleImages);
  });

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <Box position='relative' w='800px' h='450px'>
      <Button
        position='absolute'
        top='0'
        bottom='0'
        left='0'
        margin='auto 0'
        roundedLeft='0'
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button
        position='absolute'
        top='0'
        bottom='0'
        right='0'
        margin='auto 0'
        roundedRight='0'
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
      <Flex
        position='absolute'
        bottom='0'
        left='50%'
        transform='translate(-50%, -50%)'
        gap='4'
      >
        {images.map((image, index) => (
          <FontAwesomeIcon
            color='#ffffff70'
            cursor='pointer'
            icon={current === index ? faCircleDot : faCircle}
            key={image.id}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Flex>
      <Image
        src={images[current].image}
        rounded='md'
        fit='cover'
        w='100%'
        h='100%'
      ></Image>
    </Box>
  );
};

export default ImageSlider;

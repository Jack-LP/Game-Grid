import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Text,
  Badge,
  Image,
  Flex,
  VStack,
  Skeleton,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../common/ImageSlider';

const Featured = ({ gameData }) => {
  let featuredGame = gameData[Math.floor(Math.random() * gameData.length)];
  const [featuredGameData, setFeaturedGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedGame = async () => {
      const result = await axios(
        `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
          params: { id: `${featuredGame.id}` },
          headers: {
            'X-RapidAPI-Key':
              '8ebe34813bmsh6e275fbf0f07504p1b7a10jsne2f604a9e8cb',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      );
      setFeaturedGameData(result.data);
      setIsLoading(false);
    };

    fetchFeaturedGame();
  }, []);

  return (
    <Container
      maxW={['90vw', null, null, '1200px']}
      p='0'
      mt='100px'
      gap={['5', null, null, '10']}
      display='flex'
      flexDirection={['column', null, null, 'row']}
      alignItems={['center', null, null, 'normal']}
    >
      <Box>
        {isLoading ? (
          <Skeleton width={['100vw', null, null, '800px']} height='450px' />
        ) : (
          <Box
            width={['90vw', null, null, '800px']}
            height={['200px', '350px', '400px', '450px']}
          >
            {featuredGameData.screenshots.length === 0 ? (
              <Image
                src={featuredGameData.thumbnail}
                rounded='md'
                fit='cover'
                w='100%'
                h='100%'
              />
            ) : (
              <ImageSlider images={featuredGameData.screenshots} />
            )}
          </Box>
        )}
      </Box>
      {isLoading ? (
        <VStack pl='10' width='100%' spacing='5'>
          <Skeleton width='100%' height='50px' />
          <Skeleton width='100%' height='30px' />
          <Skeleton width='100%' height='80px' />
        </VStack>
      ) : (
        <Flex
          direction='column'
          gap='4'
          alignItems='flex-start'
          p='4'
          bgColor='charcoal.800'
          rounded='md'
          width='100%'
        >
          <Flex direction='column' gap='2'>
            <Link to={`game/${featuredGameData.id}`}>
              <Text fontSize='3xl'>
                {isLoading ? 'Loading...' : featuredGameData.title}
              </Text>
            </Link>
            <Flex>
              {featuredGameData.platform === 'Windows' ? (
                <FontAwesomeIcon icon={faComputer} />
              ) : featuredGameData.platform === 'Web Browser' ? (
                <FontAwesomeIcon icon={faGlobe} />
              ) : (
                <Flex alignItems='center' gap='2'>
                  <FontAwesomeIcon icon={faComputer} />
                  <FontAwesomeIcon icon={faGlobe} />
                </Flex>
              )}
            </Flex>
          </Flex>
          <Text color='whiteAlpha.800' fontSize='xl'>
            Now Available
          </Text>
          <Text color='whiteAlpha.700'>
            {isLoading ? 'Loading...' : featuredGameData.short_description}
          </Text>
          <Badge>FREE</Badge>
        </Flex>
      )}
    </Container>
  );
};

export default Featured;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import ImageSlider from './ImageSlider';

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
    <Container maxW='1200px' display='flex' p='0' mt='100px'>
      <Box width='800px' height='450px'>
        {isLoading ? (
          <Skeleton width='800px' height='450px' />
        ) : (
          <Box w='800px' h='450px'>
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
        <Flex direction='column' gap='4' alignItems='flex-start' pl='10'>
          <Text fontSize='3xl'>
            {isLoading ? 'Loading...' : featuredGameData.title}
          </Text>
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

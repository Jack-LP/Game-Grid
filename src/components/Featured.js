import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Text,
  Badge,
  Image,
  Spinner,
  Flex,
} from '@chakra-ui/react';

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
    <Container maxW='1200px' display='flex' p='0'>
      <Box maxW='800px'>
        {isLoading ? (
          <Box width='800px' display='flex' justifyContent='center'>
            <Spinner />
          </Box>
        ) : (
          <Image
            src={
              featuredGameData.screenshots[0].image !== undefined
                ? featuredGameData.screenshots[0].image
                : featuredGameData.thumbnail
            }
            alt='Featured Image'
            rounded='md'
          />
        )}
      </Box>
      <Flex pl='10' direction='column' gap='4' alignItems='flex-start'>
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
    </Container>
  );
};

export default Featured;

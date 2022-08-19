import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Flex, Spinner, Container } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import GameBanner from '../components/game/GameBanner';
import Title from '../components/game/Title';
import DownloadCard from '../components/game/DownloadCard';
import ImageSlider from '../components/common/ImageSlider';
import InfoCard from '../components/game/InfoCard';

const Game = () => {
  const [currentGameData, setCurrentGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchCurrentGame = async () => {
      const result = await axios(
        `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
          params: { id: `${params.gameId}` },
          headers: {
            'X-RapidAPI-Key':
              '8ebe34813bmsh6e275fbf0f07504p1b7a10jsne2f604a9e8cb',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      );
      setCurrentGameData(result.data);
      setIsLoading(false);
    };

    fetchCurrentGame();
  }, []);

  return isLoading ? (
    <Box
      w='100vw'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Spinner size='xl' />
    </Box>
  ) : (
    <Box>
      <Flex direction='column' gap='10'>
        <Navbar />
        <GameBanner currentGameData={currentGameData} />
        <Container maxW='1200px' p='0'>
          <Flex direction='column' gap='4'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Title currentGameData={currentGameData} />
              <DownloadCard currentGameData={currentGameData} />
            </Flex>
            <Flex justifyContent='space-between' gap='4'>
              <ImageSlider images={currentGameData.screenshots} />
              <InfoCard currentGameData={currentGameData} />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Game;

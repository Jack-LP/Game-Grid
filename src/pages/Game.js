import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDocumentTitle from '../useDocumentTitle';
import axios from 'axios';
import { Box, Flex, Spinner, Container, Grid } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import GameBanner from '../components/game/GameBanner';
import Title from '../components/game/Title';
import DownloadCard from '../components/game/DownloadCard';
import ImageSlider from '../components/common/ImageSlider';
import InfoCard from '../components/game/InfoCard';
import Description from '../components/game/Description';
import Requirements from '../components/game/Requirements';

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

  useDocumentTitle(
    currentGameData.title ? `${currentGameData.title}` : 'Game Grid'
  );

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
            <Grid templateColumns='1.5fr 1fr' gap='4'>
              <Title currentGameData={currentGameData} />
              <DownloadCard currentGameData={currentGameData} />
              <ImageSlider images={currentGameData.screenshots} />
              <InfoCard currentGameData={currentGameData} />
              <Description currentGameData={currentGameData} />
              <Requirements currentGameData={currentGameData} />
            </Grid>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Game;

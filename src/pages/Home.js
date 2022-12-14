import useDocumentTitle from '../useDocumentTitle';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import GameGrid from '../components/common/GameGrid';
import Featured from '../components/home/Featured';
import Banner from '../components/home/Banner';

const Home = ({ gameData, isLoading }) => {
  useDocumentTitle('Game Grid');

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
        <Featured gameData={gameData} />
        <Banner />
        <GameGrid gameData={gameData} randomGames={true} />
      </Flex>
    </Box>
  );
};

export default Home;

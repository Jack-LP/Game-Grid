import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Refine from '../components/Refine';
import Featured from '../components/Featured';

export default function Home() {
  return (
    <Box w='100vw' h='100vh' bgGradient='linear(to-t, gray.900, gray.700)'>
      <Head>
        <title>GameGrid</title>
      </Head>
      <Flex direction='column' gap='10'>
        <Navbar />
        <Refine />
        <Featured />
      </Flex>
    </Box>
  );
}

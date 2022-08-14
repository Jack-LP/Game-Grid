import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Box w='100vw' h='100vh' bgGradient='linear(to-t, gray.900, gray.700)'>
      <Head>
        <title>GameGrid</title>
      </Head>
      <Navbar />
    </Box>
  );
}

import React from 'react';
import { Flex, List, ListItem, ListIcon, Text } from '@chakra-ui/react';

const InfoCard = ({ currentGameData }) => {
  const title = currentGameData.title;
  const genre = currentGameData.genre;
  const platform = currentGameData.platform;
  const developer = currentGameData.developer;

  return (
    <Flex bgColor='gray.800' rounded='md' p='4' direction='column' maxW='300px'>
      <List spacing='2'>
        <ListItem fontSize='xl'>{title}</ListItem>
        <ListItem>Genre: {genre}</ListItem>
        <ListItem>Platform: {platform}</ListItem>
        <ListItem>Developer: {developer}</ListItem>
      </List>
    </Flex>
  );
};

export default InfoCard;

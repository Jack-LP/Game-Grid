import React from 'react';
import { Flex, List, ListItem, Text, Highlight } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({ currentGameData }) => {
  const title = currentGameData.title;
  const genre = currentGameData.genre;
  const platform = currentGameData.platform;
  const developer = currentGameData.developer;

  return (
    <Flex bgColor='charcoal.800' rounded='md' p='4' direction='column'>
      <List spacing='4' display='flex' flexDirection='column'>
        <ListItem fontSize='xl' alignSelf='center' mb='2'>
          {title}
        </ListItem>
        <ListItem display='flex' alignItems='center' gap='2'>
          <InfoOutlineIcon />
          Genre: <Text color='whiteAlpha.700'>{genre}</Text>
        </ListItem>
        <ListItem display='flex' alignItems='center' gap='2'>
          <FontAwesomeIcon
            icon={platform === 'Windows' ? faComputer : faGlobe}
          />
          Platform: <Text color='whiteAlpha.700'>{platform}</Text>
        </ListItem>
        <ListItem display='flex' alignItems='center' gap='2'>
          <FontAwesomeIcon icon={faCode} />
          Developer: <Text color='whiteAlpha.700'>{developer}</Text>
        </ListItem>
      </List>
    </Flex>
  );
};

export default InfoCard;

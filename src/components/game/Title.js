import React from 'react';
import { Text, Flex, Divider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Title = ({ currentGameData }) => {
  const platform = currentGameData.platform;
  const genre = currentGameData.genre;
  const releaseDate = currentGameData.release_date;

  return (
    <Flex direction='column' gap='2'>
      <Text fontSize='4xl'>{currentGameData.title}</Text>
      <Flex height='20px' alignItems='center'>
        {platform === 'Windows' ? (
          <FontAwesomeIcon icon={faComputer} />
        ) : platform === 'Web Browser' ? (
          <FontAwesomeIcon icon={faGlobe} />
        ) : (
          <Flex alignItems='center' gap='2'>
            <FontAwesomeIcon icon={faComputer} />
            <FontAwesomeIcon icon={faGlobe} />
          </Flex>
        )}
        <Divider orientation='vertical' marginInline='2' />
        <Text>{genre}</Text>
        <Divider orientation='vertical' marginInline='2' />
        <Text>{releaseDate}</Text>
      </Flex>
    </Flex>
  );
};

export default Title;

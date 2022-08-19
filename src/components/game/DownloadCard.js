import React from 'react';
import { Flex, Tag, Button, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadCard = ({ currentGameData }) => {
  return (
    <Flex
      direction='column'
      bgColor='gray.800'
      p='4'
      gap='2'
      alignItems='flex-start'
      rounded='md'
    >
      <Tag>FREE</Tag>
      <Link href={currentGameData.game_url} target='_blank'>
        <Button
          display='flex'
          alignItems='center'
          gap='2'
          textDecoration='none'
        >
          <FontAwesomeIcon icon={faDownload} />
          Download Now
        </Button>
      </Link>
    </Flex>
  );
};

export default DownloadCard;

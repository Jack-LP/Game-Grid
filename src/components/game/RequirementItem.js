import React from 'react';
import { ListItem, Flex, Text, Divider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RequirementItem = ({ requirements, title, spec, icon }) => {
  return requirements ? (
    <ListItem display='flex' flexDirection='column' gap='2'>
      <Flex gap='2' alignItems='center'>
        <FontAwesomeIcon icon={icon} />
        <Text>{title}</Text>
      </Flex>
      <Divider width='50%' />
      <Text color='whiteAlpha.700'>{!spec || spec === '?' ? 'N/A' : spec}</Text>
    </ListItem>
  ) : (
    <ListItem display='flex' flexDirection='column' gap='2'>
      <Flex gap='2' alignItems='center'>
        <FontAwesomeIcon icon={icon} />
        <Text>{title}</Text>
      </Flex>
      <Divider width='50%' />
      <Text color='whiteAlpha.700'>{'N/A'}</Text>
    </ListItem>
  );
};

export default RequirementItem;

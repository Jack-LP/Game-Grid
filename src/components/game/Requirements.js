import React from 'react';
import { Flex, List, ListItem } from '@chakra-ui/react';
import RequirementItem from './RequirementItem';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import {
  faMicrochip,
  faMemory,
  faTachographDigital,
  faHardDrive,
} from '@fortawesome/free-solid-svg-icons';

const Requirements = ({ currentGameData }) => {
  const requirements = currentGameData.minimum_system_requirements;

  return (
    <Flex bgColor='charcoal.800' rounded='md' p='4'>
      <List spacing='4'>
        <ListItem fontSize='xl' mb='2'>
          Minimum system requirements
        </ListItem>
        <RequirementItem
          requirements={requirements}
          title={'Operating System'}
          spec={requirements ? requirements.os : null}
          icon={faWindows}
        />
        <RequirementItem
          requirements={requirements}
          title={'Processor'}
          spec={requirements ? requirements.processor : null}
          icon={faMicrochip}
        />
        <RequirementItem
          requirements={requirements}
          title={'Memory'}
          spec={requirements ? requirements.memory : null}
          icon={faMemory}
        />
        <RequirementItem
          requirements={requirements}
          title={'Graphics'}
          spec={requirements ? requirements.graphics : null}
          icon={faTachographDigital}
        />
        <RequirementItem
          requirements={requirements}
          title={'Storage'}
          spec={requirements ? requirements.storage : null}
          icon={faHardDrive}
        />
      </List>
    </Flex>
  );
};

export default Requirements;

import React, { useRef } from 'react';
import {
  Flex,
  Text,
  RadioGroup,
  Radio,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const GenreFilterCard = ({ filterValues, updateFilteredGameData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={['flex', null, null, 'none']}
        gap='2'
      >
        Genre
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor='charcoal.700'>
          <DrawerHeader>
            {' '}
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction='column'
              gap='4'
              p='4'
              rounded='md'
              minW='200px'
              height='400px'
            >
              <Text fontSize='xl'>Genre</Text>
              <RadioGroup display='flex' flexDirection='column' gap='2'>
                <Radio
                  value={'All'}
                  isChecked='true'
                  onChange={() => updateFilteredGameData('All')}
                >
                  All
                </Radio>
                {filterValues.map((item, idx) => (
                  <Radio
                    value={item}
                    key={idx}
                    onChange={() => updateFilteredGameData(item)}
                  >
                    {item}
                  </Radio>
                ))}
              </RadioGroup>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        direction='column'
        gap='4'
        p='4'
        rounded='md'
        minW='200px'
        height='400px'
        display={['none', null, null, 'flex']}
      >
        <Text fontSize='xl'>Genre</Text>
        <RadioGroup display='flex' flexDirection='column' gap='2'>
          <Radio
            value={'All'}
            isChecked='true'
            onChange={() => updateFilteredGameData('All')}
          >
            All
          </Radio>
          {filterValues.map((item, idx) => (
            <Radio
              value={item}
              key={idx}
              onChange={() => updateFilteredGameData(item)}
            >
              {item}
            </Radio>
          ))}
        </RadioGroup>
      </Flex>
    </>
  );
};

export default GenreFilterCard;

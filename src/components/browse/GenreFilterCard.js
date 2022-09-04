import React from 'react';
import { Flex, Text, RadioGroup, Radio } from '@chakra-ui/react';

const GenreFilterCard = ({ filterValues, updateFilteredGameData }) => {
  return (
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
  );
};

export default GenreFilterCard;

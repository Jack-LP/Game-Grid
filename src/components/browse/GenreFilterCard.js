import React from 'react';
import { Flex, Text, RadioGroup, Radio } from '@chakra-ui/react';

const GenreFilterCard = ({
  filterValues,
  setFilteredGameData,
  setFilter,
  filter,
  gameData,
}) => {
  return (
    <Flex
      direction='column'
      bg='charcoal.800'
      gap='4'
      p='4'
      rounded='md'
      minW='200px'
    >
      <Text>Genre</Text>
      <RadioGroup onChange={setFilter} display='flex' flexDir='column'>
        {filterValues.map((item) => (
          <Radio
            onChange={() =>
              setFilteredGameData(
                gameData.filter((game) => game.genre === filter)
              )
            }
            value={item}
            key={Math.floor(Math.random() * 10000)}
          >
            {item}
          </Radio>
        ))}
      </RadioGroup>
    </Flex>
  );
};

export default GenreFilterCard;

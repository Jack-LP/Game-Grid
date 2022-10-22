import React from 'react';
import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SearchList = ({ searchData, searchResults, toggle, setToggle, top }) => {
  return (
    <>
      <Box
        width='100vw'
        height='100vh'
        position='absolute'
        opacity='0'
        onClick={() => setToggle(false)}
      />
      <Flex
        direction='column'
        position='absolute'
        top={top}
        backgroundColor='charcoal.800'
        p='4'
        zIndex='1'
        rounded='md'
        display={
          searchData === '' || !toggle || searchResults.length === 0
            ? 'none'
            : 'flex'
        }
        gap='2'
        mt='2'
      >
        {searchResults
          .slice(0, 10)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item) => (
            <Link
              to={`game/${item.id}`}
              key={item.id}
              onClick={() => setToggle(false)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Image width='75px' src={item.thumbnail} rounded='sm' />
              <Text>{item.title}</Text>
            </Link>
          ))}
      </Flex>
    </>
  );
};

export default SearchList;

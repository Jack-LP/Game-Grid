import React, { useState } from 'react';
import { Input, Flex } from '@chakra-ui/react';
import SearchList from './SearchList';

const gameData = JSON.parse(localStorage.getItem('gameData'));

const SearchDropdown = ({ displayWidths, marginLeft, width, top }) => {
  const [toggle, setToggle] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Flex ml={marginLeft} width={width} display={displayWidths}>
      <Input
        placeholder='Search'
        focusBorderColor='purple.700'
        variant='filled'
        rounded='full'
        onChange={(e) => {
          setSearchData(e.target.value);
          setSearchResults(
            gameData.filter((game) =>
              game.title.toLowerCase().includes(searchData.toLowerCase())
            )
          );
          setToggle(true);
        }}
      />
      <SearchList
        searchData={searchData}
        searchResults={searchResults}
        toggle={toggle}
        setToggle={setToggle}
        top={top}
      />
    </Flex>
  );
};

export default SearchDropdown;

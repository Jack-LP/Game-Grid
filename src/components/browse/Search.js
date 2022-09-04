import React from 'react';
import { Input } from '@chakra-ui/react';

const Search = ({ updateSearchValue }) => {
  return (
    <Input
      placeholder='Search'
      focusBorderColor='purple.700'
      variant='filled'
      rounded='full'
      onChange={(e) => updateSearchValue(e)}
    />
  );
};

export default Search;

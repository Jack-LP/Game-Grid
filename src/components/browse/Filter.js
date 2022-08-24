import React from 'react';
import { Button } from '@chakra-ui/react';

const Filter = ({ filterKey, filterValue }) => {
  return <Button>{filterValue}</Button>;
};

export default Filter;

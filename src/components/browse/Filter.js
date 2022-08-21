import React from 'react';
import { Checkbox } from '@chakra-ui/react';

const Filter = ({ filterKey, filterValue, updateFilters }) => {
  return (
    <Checkbox
      onChange={(e) => updateFilters(e.target.checked, filterKey, filterValue)}
    >
      {filterValue}
    </Checkbox>
  );
};

export default Filter;

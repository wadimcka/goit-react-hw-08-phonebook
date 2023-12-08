import React from 'react';
import { FilterInput, FilterInputLabel, FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handlChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrap>
      <FilterInputLabel htmlFor="">Find contacts by name</FilterInputLabel>
      <FilterInput type="text" value={filter} onChange={handlChange} />
    </FilterWrap>
  );
}

export default Filter;

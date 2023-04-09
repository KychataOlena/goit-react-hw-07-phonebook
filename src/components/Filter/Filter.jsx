import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <form>
      <label>
        <p>Find contact by name</p>
        <FilterInput type="text" onChange={changeFilter} />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

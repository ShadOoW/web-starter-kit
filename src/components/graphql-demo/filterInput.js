import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

function FilterInput({ onChange }) {
  return (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      onChange={event => onChange(event.target.value)}
      placeholder='Filter by name (ex: Rick, Morty, Robot)'
      aria-label='filter-input'
      maxlength={20}
    />
  );
}

FilterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;

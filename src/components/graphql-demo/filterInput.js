import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useDebounce from 'utils/use-debounce';

function FilterInput({ onChange, placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      onChange(debouncedSearchTerm);
    },
    [debouncedSearchTerm],
  );

  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

FilterInput.defaultProps = {
  placeholder: '',
};

FilterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default FilterInput;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Spinner } from 'common';

// Import Layout
import { Flex, Div } from 'layout';

// Import Utils
import { useDebounce } from 'utils';

function FilterInput({ onChange, placeholder, isLoading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      onChange(debouncedSearchTerm);
    },
    [debouncedSearchTerm],
  );

  return (
    <Flex
      position='relative'
    >
      <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => (setSearchTerm(e.target.value))}
      />
      <Div
        position='absolute'
        right={10}
        top={8}
        display={isLoading ? 'block' : 'none'}
        width={24}
        height={24}
      >
        <Spinner />
      </Div>
    </Flex>
  );
}

FilterInput.defaultProps = {
  placeholder: '',
  isLoading: false,
};

FilterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default FilterInput;

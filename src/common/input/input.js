import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Spinner } from 'common/loader';

// Import Layout
import { Flex, Block } from 'layout';

// Import Utils
import { useDebounce, Direction } from 'utils';

function Input({ onChange, placeholder, isLoading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Flex position='relative'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.target.blur();
          }
        }}
        aria-label='Search'
      />
      <Block
        as={Direction}
        position='absolute'
        top='.8rem'
        display={isLoading ? 'block' : 'none'}
        width='2.4rem'
        height='2.4rem'
        dirRight='1.5rem'
      >
        <Spinner />
      </Block>
    </Flex>
  );
}

Input.defaultProps = {
  placeholder: '',
  isLoading: false,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Input;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { dir } from 'lib/styled-components-direction';

// Import Components
import { Spinner } from 'common';

// Import Layout
import { Flex, Block } from 'layout';

// Import Utils
import { useDebounce } from 'utils';

const SpinnerWrapper = styled.nav`
  ${dir`
    right: ${(props) => props.theme.space[4]};
  `}
`;

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
      <Block
        as={SpinnerWrapper}
        position='absolute'
        top={8}
        display={isLoading ? 'block' : 'none'}
        width={24}
        height={24}
      >
        <Spinner />
      </Block>
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

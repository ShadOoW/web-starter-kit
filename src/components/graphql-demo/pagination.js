// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { Text } from 'typography';

// Import Common
import { Button } from 'common/button';

function Pagination({ page, pages, next, prev, onNext, onPrev }) {
  if (pages === null) {
    return false;
  }

  return (
    <Flex alignItems='center'>
      <Button
        size='small'
        disabled={prev === null}
        onClick={() => onPrev(prev)}
      >
        Prev
      </Button>
      <Text px='1rem'>{`${page}/${pages}`}</Text>
      <Button
        size='small'
        disabled={next === null}
        onClick={() => onNext(next)}
      >
        Next
      </Button>
    </Flex>
  );
}

Pagination.defaultProps = {
  next: null,
  prev: null,
  pages: null,
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number,
  next: PropTypes.number,
  prev: PropTypes.number,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Pagination;

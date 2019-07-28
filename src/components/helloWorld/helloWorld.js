import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from 'typography';

function HelloWorld({ name }) {
  return (
    <div>
      <H1 pt={[4, 6]}>Hello {name}</H1>
      Welcome to Next.js!
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;

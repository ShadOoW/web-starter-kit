import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({ name }) {
  return (
    <div>
      Hello <b>{name}</b>, Welcome to Next.js!
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;

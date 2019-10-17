import React from 'react';
import PropTypes from 'prop-types';

const SVGBurger = ({ width, height }) => (
  <svg
    viewBox='0 0 24 24'
    width={width}
    height={height}
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    focusable='false'
  >
    <g>
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </g>
  </svg>
);

SVGBurger.defaultProps = {
  width: '24px',
  height: '24px',
};

SVGBurger.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SVGBurger;

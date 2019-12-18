// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import  Layout
import { Block } from 'layout';

const MarkdownStyle = styled(Block)`
  pre {
    padding: 1rem 2rem;
    border: 1px solid ${cssVarColorsNames.foregroundAccent};
    background: ${cssVarColorsNames.backgroundAccent};
  }

  img {
    height: 40px;
    width: initial;
  }

  h1,
  h2,
  h3 {
    padding: 1.5rem 0;
  }
`;

function Readme({ source }) {
  return (
    <MarkdownStyle>
      <ReactMarkdown source={source} escapeHtml={false} />
    </MarkdownStyle>
  );
}

Readme.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Readme;

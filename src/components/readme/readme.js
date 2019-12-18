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
  padding-top: 2rem;

  pre {
    padding: 0.5rem;
    overflow-x: auto;
    border: 1px solid ${cssVarColorsNames.foregroundAccent};
    background: ${cssVarColorsNames.backgroundAccent};

    @media (min-width: ${(props) => props.theme.sizes.medium}px) {
      padding: 1rem 2rem;
    }
  }

  .shields {
    display: flex;
    flex-direction: column;

    a {
      padding: 1rem 0;

      img {
        width: 20rem;
      }
    }

    @media (min-width: ${(props) => props.theme.sizes.small}px) {
      flex-direction: row;

      a {
        padding: 0 1rem;

        img {
          height: 40px;
          width: initial;
        }
      }
    }
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

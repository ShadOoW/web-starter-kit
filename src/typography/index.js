import styled, { css } from 'styled-components';
import { space, typography, color, size } from 'styled-system';
import { cssVarColorsNames } from 'styles/theme';

const styles = css`
  ${space}
  ${typography}
  ${color}
  ${size}
`;

const stylesH1 = css`
  font-size: ${(props) => props.theme.fontSizes.h1};
  line-height: ${(props) => props.theme.lineHeights.h1};
`;

const stylesH2 = css`
  font-size: ${(props) => props.theme.fontSizes.h2};
  line-height: ${(props) => props.theme.lineHeights.h2};
`;

const stylesH3 = css`
  font-size: ${(props) => props.theme.fontSizes.h3};
  line-height: ${(props) => props.theme.lineHeights.h3};
`;

const stylesH4 = css`
  font-size: ${(props) => props.theme.fontSizes.h4};
  line-height: ${(props) => props.theme.lineHeights.h4};
`;

const stylesH5 = css`
  font-size: ${(props) => props.theme.fontSizes.h5};
  line-height: ${(props) => props.theme.lineHeights.h5};
`;

const stylesH6 = css`
  font-size: ${(props) => props.theme.fontSizes.h6};
  line-height: ${(props) => props.theme.lineHeights.h6};
`;

const stylesSmall = css`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.h6};
  line-height: ${(props) => props.theme.lineHeights.h6};
`;

const stylesLabel = css`
  font-size: ${(props) => props.theme.fontSizes.h6};
  line-height: ${(props) => props.theme.lineHeights.h6};
`;

export const H1 = styled.h1`
  ${styles}
  ${stylesH1}
`;

export const H2 = styled.h2`
  ${styles}
  ${stylesH2}
`;

export const H3 = styled.h3`
  ${styles}
  ${stylesH3}
`;

export const H4 = styled.h4`
  ${styles}
  ${stylesH4}
`;

export const H5 = styled.h5`
  ${styles}
  ${stylesH5}
`;

export const H6 = styled.h6`
  ${styles}
  ${stylesH6}
`;

export const Small = styled.small`
  ${styles}
  ${stylesSmall}
`;

export const Label = styled.label`
  ${styles}
  ${stylesLabel}
`;

export const Text = styled.span`
  ${styles}

  ${({ h1 }) => h1 && stylesH1}
  ${({ h2 }) => h2 && stylesH2}
  ${({ h3 }) => h3 && stylesH3}
  ${({ h4 }) => h4 && stylesH4}
  ${({ small }) => small && stylesSmall}
  ${({ error }) => error && `color: ${cssVarColorsNames.foregroundError};`}
  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ capitalize }) => capitalize && 'text-transform: capitalize;'}
  ${({ breakAll }) => breakAll && 'word-break: break-all;'}
  ${({ ellipsis }) =>
    ellipsis &&
    'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'}
`;

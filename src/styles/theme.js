export const fontSizeInit = '10px';

export const fontSizeBase = '1.6rem';
export const fontSizeBig = '1.8rem';
export const fontSizeSmall = '.875rem';
export const fontSizeEmph = '1.6rem';
export const fontSizeH1 = '2.5rem';
export const fontSizeH2 = '2rem';

export const colorDarker = '#252627';
export const colorDark = '#292a2d';
export const colorLighter = '#fff';
export const colorLight = '#a9a9b3';
export const colorAccent = '#fe5186';

export const breakpointLarge = '1200px';
export const breakpointMedium = '920px';
export const breakpointSmall = '640px';

export const lineHight = 1.54;

export const theme = {
  space: ['0', '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem'],
  fontSizes: {
    init: fontSizeInit,
    base: fontSizeBase,
    big: fontSizeBig,
    small: fontSizeSmall,
    emph: fontSizeEmph,
    h1: fontSizeH1,
    h2: fontSizeH2,
    h3: fontSizeBig,
    h4: fontSizeEmph,
    h5: fontSizeBase,
    h6: fontSizeSmall,
  },
  colors: {
    light: colorLight,
    lighter: colorLighter,
    dark: colorDark,
    darker: colorDarker,
    accent: colorAccent,
  },
  borders: { basic: 'solid .125rem' },
  breakpoints: [breakpointSmall, breakpointMedium, breakpointLarge],
  radii: { pill: '9999px' },
  textStyles: {
    active: {
      fontSize: fontSizeBig,
      textTransform: 'uppercase',
    },
  },
};

export default theme;

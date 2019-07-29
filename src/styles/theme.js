export const fontSizeInit = '10px';

export const fontSizeBase = '1.6rem';
export const fontSizeBig = '1.8rem';
export const fontSizeSmall = '.875rem';
export const fontSizeEmph = '1.6rem';
export const fontSizeH1 = '2.5rem';
export const fontSizeH2 = '2rem';

export const darkBackgroundAccent = '#252627';
export const darkBackground = '#292a2d';
export const darkForeground = '#a9a9b3';
export const darkForegroundAccent = '#fe5186';

export const lightBackgroundAccent = '#fafafa';
export const lightBackground = '#fff';
export const lightForeground = '#222';
export const lightForegroundAccent = '#fe5186';

export const breakpointLarge = '1200px';
export const breakpointMedium = '920px';
export const breakpointSmall = '640px';

export const cssVarColorsNames = {
  background: 'var(--color-background)',
  backgroundAccent: 'var(--color-backgroundAccent)',
  foreground: 'var(--color-foreground)',
  foregroundAccent: 'var(--color-foregroundAccent)',
};

export const lineHight = 1.54;

export const darkColorsTheme = {
  colors: {
    background: darkBackground,
    backgroundAccent: darkBackgroundAccent,
    foreground: darkForeground,
    foregroundAccent: darkForegroundAccent,
  },
};

export const lightColorsTheme = {
  colors: {
    background: lightBackground,
    backgroundAccent: lightBackgroundAccent,
    foreground: lightForeground,
    foregroundAccent: lightForegroundAccent,
  },
};

const theme = {
  space: ['0', '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem'],
  sizes: { small: 640, medium: 920, large: 1200 },
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
  borders: { basic: 'solid .125rem' },
  breakpoints: [breakpointSmall, breakpointMedium, breakpointLarge],
  radii: { pill: '9999px' },
  zIndex: 9999,
  textStyles: {
    active: {
      fontSize: fontSizeBig,
      textTransform: 'uppercase',
    },
  },
};

export default theme;

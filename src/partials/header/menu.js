// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

// Theme
import { cssVarColorsNames } from 'styles/theme';

// Utils
import { Direction } from 'utils';

// Layout
import { Flex } from 'layout';

// Import Typography
import { Text } from 'typography';

// SVG Ions
import { SVGBurger, SVGThemeTogger } from 'common/icons';

const Menu = () => {
  const [hide, toggleHide] = useState(true);
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const userTheme = parseCookies().theme;
    setTheme(userTheme || 'light');
  }, []);

  useEffect(() => {
    setCookie({}, 'theme', theme, { path: '/' });

    if (document.getElementsByTagName('html')[0].className !== theme) {
      document.getElementsByTagName('html')[0].className = theme;
    }
  }, [theme]);

  return (
    <>
      <Flex
        as={Direction}
        forwardedAs='nav'
        bg={cssVarColorsNames.backgroundAccent}
        display={[hide ? 'none' : 'flex', 'flex']}
        position={['absolute', 'relative']}
        top={[70, 0]}
        dirRight='0'
        dirBorderRight='1px solid'
        dirMarginRight='1rem'
        p={[3, 0]}
      >
        <Flex
          as='ul'
          alignItems={['flex-start', 'center']}
          justfyContent='flex-start'
          flexDirection={['column', 'row']}
          mx={[0, 3]}
          px={[2, 0]}
        >
          <Flex as='li'>
            <a href='/about'>About</a>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as='button'
        display={['flex', 'none']}
        border={`solid 2px ${cssVarColorsNames.foregroundAccent}`}
        borderRadius={10}
        backgroundColor={cssVarColorsNames.backgroundAccent}
        alignItems='center'
        width={[null, '120px']}
        justifyContent='space-around'
        onClick={() => toggleHide(!hide)}
      >
        <SVGBurger />
      </Flex>
      <Flex
        as='button'
        border={`solid 2px ${cssVarColorsNames.foregroundAccent}`}
        borderRadius={10}
        backgroundColor={cssVarColorsNames.backgroundAccent}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        alignItems='center'
        justifyContent='space-around'
        mx={3}
      >
        <SVGThemeTogger />
        <Flex as={Direction} dirPaddingLeft='1rem' display={['none', 'block']}>
          <Text capitalize>{theme}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Menu;

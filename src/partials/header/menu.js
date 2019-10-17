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
  const cookieTheme = parseCookies().theme;

  const [hide, toggleHide] = useState(true);
  // TODO: Find a way to detect actual theme before initial render
  const [actualTheme, setActualTheme] = useState(cookieTheme || 'light');

  useEffect(() => {
    setCookie({}, 'theme', actualTheme);

    document.getElementsByTagName('html')[0].className = actualTheme;
  }, [actualTheme]);

  const toggleTheme = () => {
    setActualTheme(actualTheme === 'light' ? 'dark' : 'light');
  };

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
        onClick={() => toggleTheme()}
        alignItems='center'
        justifyContent='space-around'
        mx={3}
      >
        <SVGThemeTogger />
        <Flex as={Direction} dirPaddingLeft='1rem' display={['none', 'block']}>
          <Text capitalize>{actualTheme}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Menu;

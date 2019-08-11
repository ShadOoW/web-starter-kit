// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

// Theme
import { cssVarColorsNames } from 'styles/theme';

// Layout
import { Flex } from 'layout';

// SVG Ions
import BurgerIcon from './burger.svg';
import ThemeTogglerIcon from './theme-toggler.svg';

const Menu = () => {
  const cookieTheme = parseCookies().theme;

  const [hide, toggleHide] = useState(true);
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
        as='nav'
        bg={cssVarColorsNames.backgroundAccent}
        display={[hide ? 'none' : 'flex', 'flex']}
        px={4}
        mr={[0, 4]}
        position={['absolute', 'relative']}
        top={[70, 0]}
        right={0}
        borderRight={[0, '1px solid']}
      >
        <Flex
          as='ul'
          alignItems={['flex-start', 'center']}
          justfyContent='flex-start'
          flexDirection={['column', 'row']}
          mx={[0, 3]}
          px={[2, 0]}
        >
          <Flex
            as='li'
            mx={[0, 3]}
            p={[2, 0]}
          >
            <a href='/about'>About</a>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        backgroundColor={cssVarColorsNames.backgroundAccent}
        mr={3}
        display={['flex', 'none']}
        onClick={() => toggleHide(!hide)}
        alignItems='center'
      >
        <BurgerIcon width={24} height={24} />
      </Flex>
      <Flex
        mr={3}
        backgroundColor={cssVarColorsNames.backgroundAccent}
        onClick={() => toggleTheme()}
        alignItems='center'
      >
        <ThemeTogglerIcon width={24} height={24} />
      </Flex>
    </>
  );
};

export default Menu;

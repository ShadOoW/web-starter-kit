// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import styled from 'styled-components';
import { display } from 'styled-system';

// Theme
import { cssVarColorsNames } from 'styles/theme';

// Layout
import { Flex } from 'layout';

// SVG Ions
import BurgerIcon from './burger.svg';
import ThemeTogglerIcon from './theme-toggler.svg';

const IconButton = styled.button`
  background: ${cssVarColorsNames.backgroundAccent};
  color: ${cssVarColorsNames.foreground};
  margin-right: ${({ theme }) => theme.space[3]};
  ${display}
`;

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
        mr={[0, 3]}
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
      <IconButton
        display={['block', 'none']}
        onClick={() => toggleHide(!hide)}
      >
        <BurgerIcon width={24} height={24} />
      </IconButton>
      <IconButton
        onClick={() => toggleTheme()}
      >
        <ThemeTogglerIcon width={24} height={24} />
      </IconButton>
    </>
  );
};

export default Menu;

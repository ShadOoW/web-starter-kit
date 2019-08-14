// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import styled from 'styled-components';
import { dir } from 'lib/styled-components-direction';

// Theme
import { cssVarColorsNames } from 'styles/theme';

// Layout
import { Flex } from 'layout';

// Import Common
import { Capitalize } from 'common';

// SVG Ions
import BurgerIcon from './burger.svg';
import ThemeTogglerIcon from './theme-toggler.svg';

const Dropdown = styled.nav`
  ${dir`
    right: 0;
    border-right: 1px solid;
    margin-right: ${(props) => props.theme.space[4]};
  `}
`;

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
        as={Dropdown}
        bg={cssVarColorsNames.backgroundAccent}
        display={[hide ? 'none' : 'flex', 'flex']}
        px={4}
        position={['absolute', 'relative']}
        top={[70, 0]}
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
        as='button'
        border={`solid 2px ${cssVarColorsNames.foregroundAccent}`}
        borderRadius={10}
        mr={3}
        backgroundColor={cssVarColorsNames.backgroundAccent}
        onClick={() => toggleTheme()}
        alignItems='center'
      >
        <ThemeTogglerIcon width={24} height={24} /> <Capitalize>{actualTheme}</Capitalize>
      </Flex>
    </>
  );
};

export default Menu;

// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Utils
import { Direction } from 'utils';

// Import Layout
import { Flex } from 'layout';

// Import Icons
import { SVGBurger, SVGThemeTogger } from 'common/icons';

// Import Common
import { Button } from 'common/button';

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
        top={['4.8rem', 0]}
        dirRight='0'
        dirBorderRight='1px solid'
        dirMarginRight='.5rem'
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
      <Button
        size='small'
        display={['flex', 'none']}
        aria-label='Navigation Menu'
        onClick={() => toggleHide(!hide)}
      >
        <SVGBurger />
      </Button>
      <Button
        as={Direction}
        dirMarginRight='1rem'
        size='small'
        aria-label='Theme Toggler'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <SVGThemeTogger />
      </Button>
    </>
  );
};

export default Menu;

import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';

addDecorator(centered);
addDecorator(withKnobs);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <div dir='ltr'>
      <GlobalStyles />
      {story()}
    </div>
  </ThemeProvider>
));

configure(require.context('../stories', true, /\.stories\.js$/), module);

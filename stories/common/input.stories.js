/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

// Component
import { Input } from 'common/input';

// Layout
import { Block } from 'layout';

export default {
  title: 'Input',
};

export const Debounced = () => (
  <Block width='40rem'>
    <Input
      placeholder='Input box with 500ms debounce'
      onChange={action('changed')}
      isLoading={boolean('isLoading', true)}
    />
  </Block>
);

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

// Component
import { Button } from 'common/button';

// Layout
import { Flex } from 'layout';

export default {
  title: 'Button',
};

export const Enabled = () => (
  <Flex flexDirection='column' alignItems='center '>
    <Flex pb='2rem'>
      <Button onClick={action('clicked')}>Normal Button</Button>
    </Flex>
    <Button size='small' onClick={action('clicked')}>
      Small Button
    </Button>
  </Flex>
);

export const Disabled = () => (
  <Flex flexDirection='column' alignItems='center '>
    <Flex pb='2rem'>
      <Button disabled onClick={action('clicked')}>
        Normal Button
      </Button>
    </Flex>
    <Button disabled size='small' onClick={action('clicked')}>
      Small Button
    </Button>
  </Flex>
);

export const Active = () => (
  <Flex flexDirection='column' alignItems='center '>
    <Flex pb='2rem'>
      <Button className='active' onClick={action('clicked')}>
        Normal Button
      </Button>
    </Flex>
    <Button className='active' size='small' onClick={action('clicked')}>
      Small Button
    </Button>
  </Flex>
);

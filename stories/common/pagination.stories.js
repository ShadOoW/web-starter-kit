/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

// Component
import { Pagination } from 'common/pagination';

// Layout
import { Block } from 'layout';

export default {
  title: 'Pagination',
};

export const Basic = () => (
  <Block width='40rem'>
    <Pagination
      page={5}
      pages={20}
      next={6}
      prev={4}
      onNext={action('next page')}
      onPrev={action('prev page')}
    />
  </Block>
);

export const NextDisabled = () => (
  <Block width='40rem'>
    <Pagination
      page={20}
      pages={20}
      next={null}
      prev={19}
      onNext={action('next page')}
      onPrev={action('prev page')}
    />
  </Block>
);

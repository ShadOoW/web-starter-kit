/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';

import HelloWorld from '../src/components/helloWorld/helloWorld';

describe('Dummy test for HelloWorld Component', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'World!',
    };
  });

  const renderComponent = () => render(<HelloWorld {...props} />);

  it('Should contain name', () => {
    const { getByText } = renderComponent();

    expect(getByText(props.name)).toBeInTheDocument();
  });
});

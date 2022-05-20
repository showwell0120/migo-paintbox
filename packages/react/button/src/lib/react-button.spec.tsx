import { render } from '@testing-library/react';

import { ReactButton } from './react-button';

describe('ReactButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactButton>Click</ReactButton>);
    expect(baseElement).toBeTruthy();
  });
});

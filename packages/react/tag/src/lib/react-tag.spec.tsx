import { render } from '@testing-library/react';

import { ReactTag } from './react-tag';

describe('ReactTag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTag text="test" />);
    expect(baseElement).toBeTruthy();
  });
});

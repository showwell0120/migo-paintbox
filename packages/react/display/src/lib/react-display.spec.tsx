import { render } from '@testing-library/react';

import ReactDisplay from './react-display';

describe('ReactDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDisplay />);
    expect(baseElement).toBeTruthy();
  });
});

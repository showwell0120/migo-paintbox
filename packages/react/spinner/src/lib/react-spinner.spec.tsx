import { render } from '@testing-library/react';

import ReactSpinner from './react-spinner';

describe('ReactSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSpinner />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import { ReactChip } from './react-chip';

describe('ReactChip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactChip color="blue" />);
    expect(baseElement).toBeTruthy();
  });
});

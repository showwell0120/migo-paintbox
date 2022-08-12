import { render } from '@testing-library/react';

import { ReactCheckbox } from './react-checkbox';

describe('ReactCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <ReactCheckbox checked={true} onChange={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});

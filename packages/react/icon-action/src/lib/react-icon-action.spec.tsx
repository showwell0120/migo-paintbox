import { render } from '@testing-library/react';

import ReactIconAction from './react-icon-action';

describe('ReactIconAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactIconAction />);
    expect(baseElement).toBeTruthy();
  });
});

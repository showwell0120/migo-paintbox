import { render } from '@testing-library/react';

import ReactTabs from './react-tabs';

describe('ReactTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTabs />);
    expect(baseElement).toBeTruthy();
  });
});

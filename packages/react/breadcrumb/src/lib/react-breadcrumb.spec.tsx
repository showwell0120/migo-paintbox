import { render } from '@testing-library/react';

import ReactBreadcrumb from './react-breadcrumb';

describe('ReactBreadcrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactBreadcrumb />);
    expect(baseElement).toBeTruthy();
  });
});

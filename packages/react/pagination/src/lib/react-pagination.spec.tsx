import { render } from '@testing-library/react';

import ReactPagination from './react-pagination';

describe('ReactPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPagination />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReactTable from './react-table';

describe('ReactTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTable />);
    expect(baseElement).toBeTruthy();
  });
});

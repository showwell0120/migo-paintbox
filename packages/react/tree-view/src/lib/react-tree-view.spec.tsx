import { render } from '@testing-library/react';

import ReactTreeView from './react-tree-view';

describe('ReactTreeView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTreeView />);
    expect(baseElement).toBeTruthy();
  });
});

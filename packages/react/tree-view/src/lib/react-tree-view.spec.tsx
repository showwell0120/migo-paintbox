import { render } from '@testing-library/react';

import ReactTreeView from './react-tree-view';

describe('ReactTreeView', () => {
  it('should render successfully', () => {
    const itemProps = [
      {
        id: '1',
        name: 'Test 1',
        children: []
      },
      {
        id: '2',
        name: 'Test 2',
        children: []
      }
    ];
    const { baseElement } = render(<ReactTreeView items={itemProps} selectedTab={'Test 1'} />);
    expect(baseElement).toBeTruthy();
  });
});

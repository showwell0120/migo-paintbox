import { render } from '@testing-library/react';

import { ReactSearchBar } from './react-search-bar';

describe('ReactSearchBar', () => {
  it('should render successfully', () => {
    const onSearch = (t: string) => {
      console.log(t);
    };
    const { baseElement } = render(<ReactSearchBar placeholder={''} onChange={onSearch} onEnter={onSearch} />);
    expect(baseElement).toBeTruthy();
  });
});

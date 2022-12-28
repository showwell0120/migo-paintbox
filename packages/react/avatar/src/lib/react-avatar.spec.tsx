import { render } from '@testing-library/react';

import ReactAvatar from './react-avatar';

describe('ReactAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactAvatar />);
    expect(baseElement).toBeTruthy();
  });
});

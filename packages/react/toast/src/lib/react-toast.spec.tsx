import { render } from '@testing-library/react';

import { ReactToast } from './react-toast';

describe('ReactToast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactToast variant={'warn'}>Test</ReactToast>);
    expect(baseElement).toBeTruthy();
  });
});

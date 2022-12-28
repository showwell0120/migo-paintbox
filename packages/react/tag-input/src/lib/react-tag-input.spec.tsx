import { render } from '@testing-library/react';

import ReactTagInput from './react-tag-input';

describe('ReactTagInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTagInput />);
    expect(baseElement).toBeTruthy();
  });
});

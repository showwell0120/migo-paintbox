import { render } from '@testing-library/react';

import ReactSelectOption from './react-select-option';

describe('ReactSelectOption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSelectOption />);
    expect(baseElement).toBeTruthy();
  });
});

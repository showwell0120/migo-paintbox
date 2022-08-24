import { render } from '@testing-library/react';

import ReactCurrencyInput from './react-currency-input';

describe('ReactCurrencyInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCurrencyInput />);
    expect(baseElement).toBeTruthy();
  });
});

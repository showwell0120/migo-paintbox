import { render } from '@testing-library/react';

import ReactForm from './react-form';

describe('ReactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactForm />);
    expect(baseElement).toBeTruthy();
  });
});

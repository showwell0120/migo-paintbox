import { render } from '@testing-library/react';

import ReactTimePicker from './react-time-picker';

describe('ReactTimePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTimePicker />);
    expect(baseElement).toBeTruthy();
  });
});

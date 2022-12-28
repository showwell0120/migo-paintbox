import { render } from '@testing-library/react';

import ReactToggleSwitch from './react-toggle-switch';

describe('ReactToggleSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactToggleSwitch />);
    expect(baseElement).toBeTruthy();
  });
});

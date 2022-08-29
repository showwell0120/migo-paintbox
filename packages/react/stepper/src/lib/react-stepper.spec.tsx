import { render } from '@testing-library/react';

import ReactStepper from './react-stepper';

describe('ReactStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactStepper />);
    expect(baseElement).toBeTruthy();
  });
});

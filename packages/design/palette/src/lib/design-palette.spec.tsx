import { render } from '@testing-library/react';

import DesignPalette from './design-palette';

describe('DesignPalette', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignPalette />);
    expect(baseElement).toBeTruthy();
  });
});

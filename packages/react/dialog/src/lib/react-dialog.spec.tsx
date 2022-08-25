import { render } from '@testing-library/react';

import { ReactDialog } from './react-dialog';

describe('ReactDialog', () => {
  it('should render successfully', () => {
    
    const { baseElement } = render(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <ReactDialog isOpen={true} onClose={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});

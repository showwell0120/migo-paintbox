import { render } from '@testing-library/react';

import { ReactRadio } from './react-radio';

describe('ReactRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <ReactRadio name="test" value="test" label="test one" checked={false} onChange={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReactImageUploader from './react-image-uploader';

describe('ReactImageUploader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactImageUploader />);
    expect(baseElement).toBeTruthy();
  });
});

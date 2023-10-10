import { render } from '@testing-library/react';

import TaxDocuments from './tax-documents';

describe('TaxDocuments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaxDocuments />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import AccountsSummary from './accounts-summary';

describe('AccountsSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountsSummary />);
    expect(baseElement).toBeTruthy();
  });
});

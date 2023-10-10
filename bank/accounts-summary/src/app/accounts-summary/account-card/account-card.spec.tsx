import { render } from '@testing-library/react';

import AccountCard from './account-card';

describe('AccountCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountCard />);
    expect(baseElement).toBeTruthy();
  });
});

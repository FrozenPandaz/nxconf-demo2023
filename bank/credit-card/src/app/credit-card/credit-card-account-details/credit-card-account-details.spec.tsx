import { render } from '@testing-library/react';

import CreditCardAccountDetails from './credit-card-account-details';

describe('CreditCardAccountDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditCardAccountDetails />);
    expect(baseElement).toBeTruthy();
  });
});

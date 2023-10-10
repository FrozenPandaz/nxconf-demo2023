import { render } from '@testing-library/react';

import UsdAmount from './usd-amount';

describe('UsdAmount', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsdAmount />);
    expect(baseElement).toBeTruthy();
  });
});

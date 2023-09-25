import { getGreeting } from '../support/app.po';

describe('credit-card', () => {
  beforeEach(() => cy.visit('/card/2'));

  it('should display transactions', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('');
  });
});

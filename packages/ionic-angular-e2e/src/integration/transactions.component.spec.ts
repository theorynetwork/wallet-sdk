describe('ionic-angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=transactionscomponent--primary'));
  it('should render the component', () => {
    cy.get('tn-transactions').should('exist');
  });
});
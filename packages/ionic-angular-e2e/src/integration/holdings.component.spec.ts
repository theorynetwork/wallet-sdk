describe('ionic-angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=holdingscomponent--primary'));
  it('should render the component', () => {
    cy.get('tn-holdings').should('exist');
  });
});
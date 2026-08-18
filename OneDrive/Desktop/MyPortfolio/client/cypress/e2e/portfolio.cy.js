describe('Portfolio Web App E2E Test', () => {
  it('navigates through portfolio pages correctly', () => {
    // Visit local React app
    cy.visit('http://localhost:3000');
    
    // Check for Services navigation link and click it
    cy.contains('Services').should('be.visible').click();
    
    // Confirm URL updated (matching your lowercase route path)
    cy.url().should('include', '/services');
  });
});
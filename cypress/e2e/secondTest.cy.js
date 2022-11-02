describe('URL siblings navigation', function(){
    it('Clicking "siblings navigates to URL', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('siblings').click()
        cy.url().should('include', '/commands/traversal')
    })
})
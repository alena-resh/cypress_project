describe('Commands URL navigation', () => {
    it('Checking menu button for commands', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a.dropdown-toggle').click()
    })
});
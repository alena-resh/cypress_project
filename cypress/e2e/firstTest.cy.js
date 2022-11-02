describe('URL type navigation', function () {
    it('Clicking "type" navigates to a new URL', function () {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
})
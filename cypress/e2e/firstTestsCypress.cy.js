describe('URL type navigation', function () {
    it('clicking "type" navigates to a new URL', function () {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
})

describe('URL siblings navigation', function(){
    it('clicking "siblings navigates to URL', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('siblings').click()
        cy.url().should('include', '/commands/traversal')
    })
})

describe('commands URL navigation', () => {
    it('checking menu button for commands', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a.dropdown-toggle').click()
    })
});
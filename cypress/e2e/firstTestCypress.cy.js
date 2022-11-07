describe('URL type navigation', function () {
    it('Clicking "type" navigates to a new URL', function () {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
})

describe('URL siblings navigation', function(){
    it('Clicking "siblings navigates to URL', function(){
        cy.visit('https://example.cypress.io')
        cy.contains('siblings').click()
        cy.url().should('include', '/commands/traversal')
    })
})

describe('Commands URL navigation', () => {
    it('Checking menu button for commands', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a.dropdown-toggle').click()
    })
});
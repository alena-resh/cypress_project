/// <reference types="cypress" />



describe('Common methods', () => {
    it('Verify that user can navigate to Elements page', () => {
        cy.visit('https://demoqa.com/')
        cy.get('header a img').should('be.visible')
        cy.get('div.card-body h5').should('have.length', 6)
        cy.get('div.card-body').find('h5').should('have.length', 6) // or .find
        cy.get('div.card-body h5').contains('Elements').click()

        cy.get('div.main-header').should('have.text', 'Elements')
        cy.get('div.main-header').should('include.text', 'Elements')
    })

    it('input field', () => {
        cy.get('li#item-0 span').contains('Text Box').click()
        cy.get('#userName')
            .should('have.attr', 'placeholder', 'Full Name')
            .type('Maria')
            .clear()
    })

    it('input field', () => {
        cy.get('#item-1 span').contains('Check Box').click()
        cy.get('#tree-node-home').check({force: true}).should('be.checked')
        cy.get('#result').should('contain', 'You have selected :home')
    })
    
})

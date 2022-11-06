/// <reference types="cypress" />



 describe('Common methods', () => {
it('Verify that user can navigate to Elements page', () => {
    cy.visit('https://demoqa.com/')
    cy.get('header a img').should('be.visible')
})
 })
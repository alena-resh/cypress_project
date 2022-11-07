/// <reference types="cypress" />

describe('radio button clicking', () => {
    it('navigate to radio button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:first-child').click()
        cy.get('div[class="element-list collapse show"] #item-2').click()
    })
})
/// <reference types="cypress" />


describe('tabs test', () => {

    beforeEach(function (){
    cy.fixture('example').then((data) => {
        this.data = data
    })
})
 
    it('verify that user can navigate to Tabs page', function () {
       cy.visit('https://demoqa.com/')
       cy.get('div.card-body h5').contains('Widgets').click()
       cy.get('li#item-5').contains('Tabs').click()
       cy.get('#tabsContainer div.mb-3')
         .should('have.text', this.data.nameHeader)
       cy.get('#demo-tab-origin')
         .click()
         .should('have.text', this.data.tabs[1])
    })
})

    // it('verify that user can navigate to Tabs page', () => {
    //     cy.visit('https://demoqa.com/');
    //     cy.get('div.card-body h5').contains('Elements').click();
    //     cy.get('div.element-group div.header-text').contains('Widgets').click();
    //     cy.get('ul.menu-list li#item-5').contains('Tabs').click();
    //     cy.get('div.main-header').should('be.visible').and('have.text', 'Tabs');
    //     cy.get('#demo-tab-origin').as('tabOrigin').should('have.attr', 'aria-selected', 'false');
    //     cy.get('@tabOrigin')
    //         .click()
    //         .should('have.attr', 'aria-selected', 'true')
    //         .and('have.class', 'active');
    //     cy.get('#demo-tab-what').should('not.have.class', 'active')
    //     cy.get('#demo-tab-more').should('have.class', 'disabled');
    // })
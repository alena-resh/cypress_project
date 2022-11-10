/// <reference types="cypress" />



describe('Common methods', () => {
    it('verify that user can navigate to Elements page', () => {
        cy.visit('https://demoqa.com/')
        cy.get('header a img').should('be.visible')
        cy.get('div.card-body h5').should('have.length', 6)
        cy.get('div.card-body').find('h5').should('have.length', 6) // or .find
        cy.get('div.card-body h5').contains('Elements').click()

        cy.get('div.main-header').should('have.text', 'Elements')
        cy.get('div.main-header').should('include.text', 'Elements')
    })

    it.skip('input field - full name', () => {
        cy.get('li#item-0 span').contains('Text Box').click()
        cy.get('#userName')
            .should('have.attr', 'placeholder', 'Full Name')
            .type('Maria')
            .clear()
    })

    it('input field - check box', () => {
        cy.get('#item-1 span').contains('Check Box').click()
        cy.get('#tree-node-home').check({force: true}).should('be.checked')
        cy.get('#result').should('contain', 'You have selected :home')
    })
    
    it('verify radioButtons', () => {
        cy.get('#item-2 span').contains('Radio Button').click()
        cy.get('input#yesRadio').as('radioButton')
        cy.get('@radioButton')
            .check({force: true})
            .should('be.checked')
        cy.get('p.mt-3').should('be.visible').and('contain', 'You have selected Yes')
        
        cy.get('input#impressiveRadio').should('not.be.checked')
        cy.get('input#noRadio').should('have.class', 'disabled')
     })
    
     it('verify dropDown menu', () => {
        cy.get('div.element-group span.group-header').contains('Widgets').click()
        cy.get('div.element-list li#item-8 span').contains('Select Menu').click()
        cy.get('#oldSelectMenu').select('Black').should('have.value', '5')
     })    
})

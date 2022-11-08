/// <reference types="cypress" />

describe('8-day forecast', () => {
    beforeEach(function () {
        cy.visit('https://openweathermap.org/')
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })
    it('navigate to 8-day forecast', () => {
        cy.get('div.daily-container h3').should('have.text', '8-day forecast')
    })

    it('8-day forecast has list', () => {
        let dateNow = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' })
        cy.visit('https://openweathermap.org/')
        cy.get("ul[class='day-list'] li:nth-child(1) span:nth-child(1)")
            .should('have.text', dateNow)
    })

    it('remember me radio button', () => {
        cy.get('li.user-li').contains('Sign in').click({ force: true })
        cy.get('#user_remember_me').check().should('be.checked')
    })

    it('enter email', () => {
        cy.get('li.user-li').contains('Sign in').click({ force: true })
        cy.get('#user_email')
            .should('have.attr', 'placeholder', 'Enter email')
            .type('alenareshh@gmail.com')
            .clear()
    })
})


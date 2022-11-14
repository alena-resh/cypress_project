/// <reference types="cypress" />



describe('8-day forecast', () => {
    beforeEach(function () {
        cy.visit('https://openweathermap.org/')
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })
    xit('navigate to 8-day forecast', () => {
        cy.get('div.daily-container h3').should('have.text', '8-day forecast')
    })

    xit('8-day forecast has list', () => {
        let dateNow = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' })
        cy.visit('https://openweathermap.org/')
        cy.get("ul[class='day-list'] li:nth-child(1) span:nth-child(1)")
            .should('have.text', dateNow)
    })

    xit('remember me radio button', () => {
        cy.get('li.user-li').contains('Sign in').click({ force: true })
        cy.get('#user_remember_me').check().should('be.checked')
    })

    xit('verify "Sign in" - enter email and password', () => {
        cy.get('li.user-li').contains('Sign in').click({ force: true })
        cy.get('#user_email')
            .should('have.attr', 'placeholder', 'Enter email')
            .type('alenareshh@gmail.com')
        cy.get('#user_password.form-control')
            .should('have.attr', 'placeholder', 'Password')
            .type('12341234')
    })

    xit('verify "Partners" menu link', () => {
        cy.get('#desktop-menu a[href="/examples"]').click({ force: true });
        cy.url().should('eq', 'https://openweathermap.org/examples')
    })

    it('verify redirection to the "Terms and conditions of sale" page', () => {
        cy.get('[href*="conditions_of_sale"]').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('eq', 'https://openweather.co.uk/storage/app/media/Terms/Openweather_terms_and_conditions_of_sale.pdf')
    })
})
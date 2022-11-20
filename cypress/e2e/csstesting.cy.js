/// <reference types="cypress" />

import "cypress-real-events/support"

describe('Hover in Cypress', () => {
  it.only ('Change "Allow All" button color on hover', () => {
    cy.visit('https://openweathermap.org/')
    cy.get('button.stick-footer-panel__link')
      .as('buttonAllowAll')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .realHover()
    
    cy.get('@buttonAllowAll').should('have.css', 'background-color', 'rgb(233, 110, 80)')
  });
})
// Hooks - run before or after a test (helps to clean up) - check links, clean up a user after registration

describe('Hooks', () => {
    before(() => { }) // runs once before all tests in the block
    beforeEach(() => { }) // runs before each test in the block
    afterEach(() => { }) // runs after each test in the block
    after(() => { }) // runs once after all test in the block
})

//.should - takes chainers and the expected value as arguments.
//Chainers are provided in a string form and can be any valid chainers that come from Chai.

.should('have.class', 'disabled')

//cy.visit()


//cy.get()


//cy.contains()


//cy.find() - searching

//cy.include()

//cy.pause - stop after a click
//cy.log - logging

//cy.type - filling in the fields

//cy.clear - cleaning after entering

//cy.check - if element has attr 'type' and checkbox (checkbox/radiobutton, select menu)
//cy.uncheck

//.should('be.checked') or .should('be.unchecked')

//it.skip - skipping the test

//it.only - running only selected test

//.as - alias

//cy.get(locator).as('aliasName') => cy.get('@aliasName')
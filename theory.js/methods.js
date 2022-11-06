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
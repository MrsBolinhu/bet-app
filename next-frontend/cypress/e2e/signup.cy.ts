describe('SignIn', () => {
    it('should check signin page', () => {
      cy.visit('/signup')
      cy.get('h2').should('contain', 'Sign up')
      cy.get('.mt-8 > :nth-child(3) > .border').should('contain', 'Sign up')
    })
})

export {}
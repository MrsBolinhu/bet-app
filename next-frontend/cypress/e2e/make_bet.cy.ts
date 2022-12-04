describe('Make bet', () => {
    it('should make bet', () => {
      cy.visit('/signin')
      cy.get('h2').contains('Sign in')
      cy.get('#email-address').type('cissa@email.com')
      cy.get('#password').type('polly')
      cy.get(':nth-child(3) > .border').click()
      cy.get(':nth-child(1) > .container').click()
      cy.get('.mt-10').should('contain', 'Make bet')
      cy.get('.mt-10').click()
      cy.get('[name="home_score"]').type('1')
      cy.get('[name="away_score"]').type('2')
      cy.get('.bg-emerald-500').click()
      cy.get('[href="/account"]').click()
      cy.get(':nth-child(6) > .flex > .ml-4').click()
    })
})
  
export {}
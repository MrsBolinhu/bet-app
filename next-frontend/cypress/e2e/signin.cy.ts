describe('Signin', () => {
    it('should login', () => {
      cy.visit('/signin')
      cy.get('h2').contains('Sign in')
      cy.get('#email-address').type('admin@admin.com')
      cy.get('#password').type('eusouadm')
      cy.get(':nth-child(3) > .border').click()
      cy.get('[href="/account"]').click()
      cy.get('.text-lg').should('contain', 'admin@admin.com')
      cy.get(':nth-child(6) > .flex > .ml-4').click()
    })
})
  
export {};
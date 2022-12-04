describe('SignIn Toast', () => {
  it('should show toast in invalid user signin', () => {
    cy.visit('/signin')
    cy.get('h2').contains('Sign in')
    cy.get('#email-address').type('teste2021@teste.com.br')
    cy.get('#password').type('teste')
    cy.get(':nth-child(3) > .border').click()
    cy.get('#toast-default').should('be.visible')
  })
})

export {}
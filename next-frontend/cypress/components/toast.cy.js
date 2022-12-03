/// <reference types="cypress" />
 
import Toast from '../../components/Toast'
import '../../styles/globals.css'

describe('<Toast>', () => {
  it('mounts', () => {
    cy.mount(<Toast />)
    cy.get('[data-cy=toast]').should('have.text', 'Invalid UserId / Password')
  })
})
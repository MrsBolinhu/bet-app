/// <reference types="cypress" />
 
import TabBar from '../../components/TabBar'
import '../../styles/globals.css'

describe('<TabBar>', () => {
  it('mounts', () => {
    cy.mount(<TabBar />)
    //cy.get('[data-cy=toast]').should('have.text', 'Invalid UserId / Password')
  })
})
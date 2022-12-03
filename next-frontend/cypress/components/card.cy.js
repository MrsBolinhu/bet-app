/// <reference types="cypress" />
 
import Card from '../../components/Card'
import '../../styles/globals.css'
 
describe('<Toast>', () => {
  it('mounts', () => {
    cy.mount(<Card match={{
        home: 'senegal.svg',
        teams: 'SEN X HOL',
        date: '21/11/2022', 
        weekDay:'SEG',
        visitor: 'holanda.svg'

        }
    }/>)
  })
})
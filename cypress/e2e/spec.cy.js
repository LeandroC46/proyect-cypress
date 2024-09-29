import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const username = 'TestingLQA'
    const password = 'TestingLQA'
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(username, password)
    cy.get('a#nameofuser').should('contain', username)
  })
})
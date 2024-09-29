import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const username = 'TestingLQA'
    const password = 'TestingLQA'
    Logger.stepNumber(1);
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://demoblaze.com/')

    Logger.stepNumber(2);
    Logger.step('Click on "Login" link')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3);
    Logger.step(`Login with this credentials: ${username}/${password}`)
    LoginMethods.login(username, password)
    Logger.verification(`The home page should show "Welcome ${username}" text`);
    cy.get('a#nameofuser').should('contain', username)
  })
})
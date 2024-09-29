export class Logger {
    static stepNumber(number){
        const text = `Step #0 ${number}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verification(description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `substep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerificationp(description){
        const text = `subverification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
}
export class ThankYouForPurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK', {timeout: 30000});
            },
        };
    }

    static get icons(){
        return{
            get greenCheckMark(){
                return cy.get('.sa-success', {timeout: 30000});
            }
        }
    }
}
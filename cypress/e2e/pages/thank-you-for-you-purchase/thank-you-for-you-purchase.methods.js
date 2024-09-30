import { ThankYouForPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForPurchaseMethods{
    static clickOnOkButton(){
        cy.wait(1000)
        ThankYouForPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMark(){
        ThankYouForPurchaseElements.icons.greenCheckMark.should('exist');
    }
}
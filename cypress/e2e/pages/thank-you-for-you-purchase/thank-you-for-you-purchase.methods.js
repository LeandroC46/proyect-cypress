import { ThankYouForPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForPurchaseMethods{
    static clickOnOkButton(){
        ThankYouForPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMark(){
        ThankYouForPurchaseElements.icons.greenCheckMark.should('exist');
    }
}
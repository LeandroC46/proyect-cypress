import { CommonPageMethods } from "../common-page/common-page.methods";
import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(productName) {
        CartElements.links.delete(productName).click();
    }

    static verifyProductOnCart(productName) {
        CartElements.links.product(productName).should('be.visible');
    }

    static clickOnPlacerOrder(){
        CartElements.buttons.placeOrder.click();
    }

    static verifyCartPageIsShow(){
        CommonPageMethods.verifyUrlContain('cart.html');
    }
}
import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods {
    static clickOnAddToCartButton() {
        ProductDetailsElements.buttons.addToCart.click();
    };

    static verifyProductDetailsButtonDisplayed() {
        ProductDetailsElements.buttons.addToCart.should('be.visible');
    }

    static verifyProductAddedMessageDisplayed(){
        cy.wait(1000);
        CommonPageMethods.verifyAlert('Product added.');
    }
};
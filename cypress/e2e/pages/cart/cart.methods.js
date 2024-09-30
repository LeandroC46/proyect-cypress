import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { HomeMethods } from "../home/home.methods";
import { LoginData } from "../login/login.data";
import { LoginMethods } from "../login/login.methods";
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

    static deleteProducts() {
        cy.intercept('POST', 'https://api.demoblaze.com/viewcart').as('viewCart')
        cy.get('a[onclick*="deleteItem"]').each(link => {
            link.click()
            cy.wait('@viewCart')
        })
    }

    static emptyCart(username, password) {
        Logger.subStep('Navigate to DemoBlaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Logout')
        CommonPageMethods.logout();
        Logger.subStep('Click on Home Option')
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Click on Login Option')
        CommonPageMethods.clickOnLoginOption();
        Logger.subStep('Login with valid credentials')
        LoginMethods.login(username, password);
        Logger.subStep('Click on Cart Option and wait 3 seconds')
        CommonPageMethods.clickOnCartOption();
        cy.wait(3000)
        Logger.subStep('Delete products from cart')
        this.deleteProducts();
    }
}
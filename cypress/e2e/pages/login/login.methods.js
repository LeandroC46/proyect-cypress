import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUsername(username) {
        LoginElements.textBoxes.username.invoke('val', username);
    }

    static insertPassword(password){
        LoginElements.textBoxes.password.invoke('val', password);
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click();
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username),
        Logger.subStep('Insert password')
        this.insertPassword(password),
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessageDisplayed(){
        cy.wait(1000)
        CommonPageMethods.verifyAlert("Wrong password.")
    };
}
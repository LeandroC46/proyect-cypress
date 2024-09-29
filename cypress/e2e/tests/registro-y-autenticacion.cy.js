const { CommonPageData } = require("../pages/common-page/common-page.data");
const { CommonPageMethods } = require("../pages/common-page/common-page.methods");
const { SignupMethods } = require("../pages/singup/signup.methods");
const { Logger } = require("../util/logger");

const username = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
    it('Registro de usuario válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SignupMethods.insertUsername(username);
        SignupMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickOnSignupButton()
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
        SignupMethods.verifySignupSuccessfulMessageDisplayed();
    });
});
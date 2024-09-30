import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeData } from "../pages/home/home.data";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { ThankYouForPurchaseMethods } from "../pages/thank-you-for-you-purchase/thank-you-for-you-purchase.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption();
        Logger.stepNumber(4)
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        HomeMethods.verifyProductDisplayed(HomeData.monitorNames.appleMonitor24);
        HomeMethods.verifyProductDisplayed(HomeData.monitorNames.asusFullHd);
    })

    it('Agregar producto al carrito', () => {
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption();

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        HomeMethods.clickOnProductLink(HomeData.monitorNames.appleMonitor24);
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsButtonDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCartButton();
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.')
        ProductDetailsMethods.verifyProductAddedMessageDisplayed();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductOnCart(HomeData.monitorNames.appleMonitor24);
    })

    it('Realizar una compra', () => {
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption();

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        HomeMethods.clickOnProductLink(HomeData.monitorNames.appleMonitor24);
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsButtonDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCartButton();
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación')
        ProductDetailsMethods.verifyProductAddedMessageDisplayed();

        Logger.stepNumber(8)
        Logger.step('Hacer clic en el icono del carrito en la barra de navegación.')
        CommonPageMethods.clickOnCartOption();
        Logger.stepNumber(9)
        Logger.verification('Verificar que se muestra la página del carrito de compras.')
        CartMethods.verifyCartPageIsShow();

        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón "Place Order".')
        CartMethods.clickOnPlacerOrder();

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.completePlaceOrderFields();

        Logger.stepNumber(12)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio.')
        ThankYouForPurchaseMethods.verifyGreenCheckMark();
        ThankYouForPurchaseMethods.clickOnOkButton();
        HomeMethods.verifyHomePageIsShow();
    })
})
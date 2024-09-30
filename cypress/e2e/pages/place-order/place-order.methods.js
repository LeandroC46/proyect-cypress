import { Logger } from "../../util/logger";
import { PlaceOrderData } from "./place-order.data";
import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke('val', name);
    }

    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke('val', country);
    }

    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke('val', city);
    }

    static insertCreditCard(creditCard){
        PlaceOrderElements.textboxes.creditCard.invoke('val', creditCard);
    }

    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke('val', month);
    }

    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke('val', year);
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }

    static completePlaceOrderFields() {
        Logger.subStep('Insertar "Name" en place order')
        this.insertName(PlaceOrderData.testData.name),
        Logger.subStep('Insertar "Country" en place order')
        this.insertCountry(PlaceOrderData.testData.country),
        Logger.subStep('Insertar "City" en place order')
        this.insertCity(PlaceOrderData.testData.city),
        Logger.subStep('Insertar "Credit card" en place order')
        this.insertCreditCard(PlaceOrderData.testData.creditCardNumber),
        Logger.subStep('Insertar "Month" en place order')
        this.insertMonth(PlaceOrderData.testData.month),
        Logger.subStep('Insertar "Year" en place order')
        this.insertYear(PlaceOrderData.testData.year)
    }
}
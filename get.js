import { LightningElement } from 'lwc';
export default class Get extends LightningElement {
    num1 = 10;
    num2 = 40;
    namesArray = ["Vali", "Shaik", "M Tech"];

    get firstName(){
       return this.namesArray[1];
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}
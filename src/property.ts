import Finance, {FinanceInterface} from './finance';
import Payment, {PaymentInterface} from './payment';
import Rental, {RentalInterface} from './rental';

interface PropertyInterface {
  name: string;
  finances: FinanceInterface[];
  payments: PaymentInterface[];
  rentals: RentalInterface[];
}

export default class Property implements PropertyInterface{
  name: string;
  finances: Finance[];
  payments: Payment[];
  rentals: Rental[];
  constructor(name: string, finances: Finance[], payments: Payment[], rentals: Rental[]) {
    this.name = name;
    this.finances = finances;
    this.payments = payments;
    this.rentals = rentals;
  }

  calculateMonthlyCost(useTeaserRate: boolean = false) {
    const financeCosts = this.finances.reduce((total, finance) => (useTeaserRate ? finance.monthlyTeaserCostOfFinance : finance.monthlyCostOfFinance) + total, 0);
    const paymentCosts = this.payments.reduce((total, payment) => payment.monthlyCost + total, 0);

    return financeCosts + paymentCosts;
  }

  calculateMonthlyIncome() {
    return this.rentals.reduce((total, rental) => rental.monthlyIncome + total, 0);
  }

  calculateMonthlyProfit(useTeaserRate: boolean = false) {
    return this.calculateMonthlyIncome() - this.calculateMonthlyCost(useTeaserRate);
  }

  static fromJson(json: PropertyInterface) {
    const property = Object.create(Property.prototype);
    return Object.assign(property, json, {
      finances: json.finances.map((financeObject: FinanceInterface) => {
        return Finance.fromJson(financeObject);
      }),
      payments: json.payments.map((paymentObject: PaymentInterface) => {
        return Payment.fromJson(paymentObject);
      }),
      rentals: json.rentals.map((rentalObject: RentalInterface) => {
        return Rental.fromJson(rentalObject);
      })
    });
  }

  static reviver(key: string, value: any): any {
    return key === "" ? Property.fromJson(value) : value;
  }
}

import Finance from './finance';
import Payment from './payment';
import Rental from './rental';

export default class Property {
  finances: Finance[];
  payments: Payment[];
  rentals: Rental[];
  constructor(finances: Finance[], payments: Payment[], rentals: Rental[]) {
    this.finances = finances;
    this.payments = payments;
    this.rentals = rentals;
  }

  calculateMonthlyCost() {
    const financeCosts = this.finances.reduce((total, finance) => finance.monthlyCostOfFinance + total, 0);
    const paymentCosts = this.payments.reduce((total, payment) => payment.monthlyCost + total, 0);

    return financeCosts + paymentCosts;
  }

  calculateMonthlyIncome() {
    return this.rentals.reduce((total, rental) => rental.monthlyIncome + total, 0);
  }

  calculateMonthlyProfit() {
    return this.calculateMonthlyIncome() - this.calculateMonthlyCost();
  }
}

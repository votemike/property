import Finance from './finance';
import Payment from './payment';
import Rental from './rental';

export default class Property {
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
}

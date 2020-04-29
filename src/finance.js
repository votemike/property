import {round} from './helpers';

export default class Finance {
  constructor(amount, repayment, length, rate, fees) {
    this.amount = amount;
    this.repayment = repayment;
    this.length = length;
    this.rate = rate;
    this.fees = fees;
  }

  get totalCostOfFinance() {
    return round(this.calculateTotalCostOfFinance());
  }

  get monthlyCostOfFinance() {
    return round(this.calculateMonthlyCostOfFinance());
  }

  get yearlyCostOfFinance() {
    return round(this.calculateYearlyCostOfFinance());
  }

  calculateTotalCostOfFinance() {
    const feeCosts = this.fees.reduce((total, fee) => fee.amount + total, 0);
    if (this.repayment) {
      return this.calculateYearlyCostOfFinance() * this.length + feeCosts;
    }

    return this.amount + this.calculateYearlyCostOfFinance() * this.length + feeCosts;
  }

  calculateYearlyCostOfFinance() {
    return this.calculateMonthlyCostOfFinance() * 12;
  }

  calculateMonthlyCostOfFinance() {
    const monthlyInterestRate = this.rate / 12 / 100;

    if (!this.repayment) {
      return this.amount * monthlyInterestRate;
    }

    const monthsLeft = this.length * 12;

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const pow = Math.pow((monthlyInterestRate + 1), monthsLeft);
    return this.amount * ((monthlyInterestRate * pow) / (pow - 1));
  }
}

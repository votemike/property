import {round} from './helpers';
import Fee from './fee';

export default class Finance {
  amount: number;
  repayment: boolean;
  length: number;
  rate: number;
  fees: Fee[];
  teaserRate: number | undefined;
  constructor(amount: number, repayment: boolean, length: number, rate: number, fees: Fee[], teaserRate?: number) {
    this.amount = amount;
    this.repayment = repayment;
    this.length = length;
    this.rate = rate;
    this.fees = fees;
    this.teaserRate = teaserRate;
  }

  get totalCostOfFinance() {
    return round(this.calculateTotalCostOfFinance());
  }

  get totalOneOffCosts() {
    return this.fees.reduce((total, fee) => fee.amount + total, 0);
  }

  get monthlyCostOfFinance() {
    return round(this.calculateMonthlyCostOfFinance());
  }

  get monthlyTeaserCostOfFinance() {
    return round(this.calculateMonthlyCostOfFinance(true));
  }

  get yearlyCostOfFinance() {
    return round(this.calculateYearlyCostOfFinance());
  }

  get yearlyTeaserOfFinance() {
    return round(this.calculateYearlyCostOfFinance(true));
  }

  calculateTotalCostOfFinance() {
    const feeCosts = this.fees.reduce((total, fee) => fee.amount + total, 0);
    if (this.repayment) {
      return this.calculateYearlyCostOfFinance() * this.length + feeCosts;
    }

    return this.amount + this.calculateYearlyCostOfFinance() * this.length + feeCosts;
  }

  calculateYearlyCostOfFinance(useTeaserRate: boolean = false) {
    return this.calculateMonthlyCostOfFinance(useTeaserRate) * 12;
  }

  calculateMonthlyCostOfFinance(useTeaserRate: boolean = false) {
    const rate = (useTeaserRate && this.teaserRate !== undefined) ? this.teaserRate : this.rate; // If the teaser rate isn't defined, just use the main rate

    const monthlyInterestRate = rate / 12 / 100;

    if (!this.repayment) {
      return this.amount * monthlyInterestRate;
    }

    const monthsLeft = this.length * 12;

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const pow = Math.pow((monthlyInterestRate + 1), monthsLeft);
    return this.amount * ((monthlyInterestRate * pow) / (pow - 1));
  }
}

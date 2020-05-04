import {round} from './helpers';
import Fee, {FeeInterface} from './fee';

export interface FinanceInterface {
  amount: number;
  repayment: boolean;
  length: number;
  rate: number;
  fees: FeeInterface[];
  teaserRate: number | undefined;
}

export default class Finance implements FinanceInterface {
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
    return round(this.calculateMonthlyCostOfFinance(this.rate));
  }

  get monthlyTeaserCostOfFinance() {
    return round(this.calculateMonthlyCostOfFinance(this.teaserRate ?? this.rate));
  }

  get yearlyCostOfFinance() {
    return round(this.calculateYearlyCostOfFinance(this.rate));
  }

  get yearlyTeaserOfFinance() {
    return round(this.calculateYearlyCostOfFinance(this.teaserRate ?? this.rate));
  }

  calculateTotalCostOfFinance() {
    const feeCosts = this.fees.reduce((total, fee) => fee.amount + total, 0);
    if (this.repayment) {
      return this.calculateYearlyCostOfFinance(this.rate) * this.length + feeCosts;
    }

    return this.amount + this.calculateYearlyCostOfFinance(this.rate) * this.length + feeCosts;
  }

  calculateYearlyCostOfFinance(rate: number) {
    return this.calculateMonthlyCostOfFinance(rate) * 12;
  }

  calculateMonthlyCostOfFinance(rate: number) {
    const monthlyInterestRate = rate / 12 / 100;

    if (!this.repayment) {
      return this.amount * monthlyInterestRate;
    }

    const monthsLeft = this.length * 12;

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const pow = Math.pow((monthlyInterestRate + 1), monthsLeft);
    return this.amount * ((monthlyInterestRate * pow) / (pow - 1));
  }

  static fromJson(json: FinanceInterface): Finance {
    const finance = Object.create(Finance.prototype);
    return Object.assign(finance, json, {
      fees: json.fees.map((feeObject: FeeInterface) => {
        return Fee.fromJson(feeObject);
      })
    });
  }
}

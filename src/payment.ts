import {round} from './helpers';

export default class Payment {
  amount: number;
  interval: 'monthly'|'yearly';
  constructor(amount: number, interval: 'monthly'|'yearly') {
    this.amount = amount;
    this.interval = interval;
  }

  get monthlyCost() {
    return round(this.calculateMonthlyCost());
  }

  get yearlyCost() {
    return round(this.calculateYearlyCost());
  }

  calculateYearlyCost() {
    if (this.interval === 'yearly') {
      return this.amount;
    }
    return this.amount * 12;
  }

  calculateMonthlyCost() {
    if (this.interval === 'monthly') {
      return this.amount;
    }
    return this.amount / 12;
  }
}

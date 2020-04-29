import {round} from './helpers';

export default class Payment {
  constructor(type, amount, interval) {
    this.type = type; //mortgage-arrangement;
    this.amount = amount;
    this.interval = interval; // 'monthly/yearly' only at the moment
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

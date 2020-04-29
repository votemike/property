import {round} from './helpers';

export default class Payment {
  constructor(amount, interval) {
    this.amount = amount;
    if (!['monthly', 'yearly'].includes(interval)) {
      throw new Error('interval must be one of \'monthly\' or \'yearly\'');
    }
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

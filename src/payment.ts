import {round} from './helpers';
import {FeeInterface} from "./fee";

export interface PaymentInterface extends FeeInterface {
  interval: 'monthly' | 'yearly';
}

export default class Payment implements PaymentInterface {
  amount: number;
  interval: 'monthly' | 'yearly';

  constructor(amount: number, interval: 'monthly' | 'yearly') {
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

  static fromJson(json: PaymentInterface): Payment {
    const payment = Object.create(Payment.prototype);
    return Object.assign(payment, json);
  }
}

import Fee from './fee';

export default class Sale {
  amount: number;
  fees: Fee[];
  constructor(amount: number, fees: Fee[]) {
    this.amount = amount;
    this.fees = fees;
  }

  calculateTotalCosts() {
    const feeCosts = this.fees.reduce((total, fee) => fee.amount + total, 0);
    return this.amount + feeCosts;
  }
}

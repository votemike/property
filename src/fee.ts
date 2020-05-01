export interface FeeInterface {
  amount: number;
}

export default class Fee {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  static fromJson(json: FeeInterface): Fee {
    const fee = Object.create(Fee.prototype);
    return Object.assign(fee, json);
  }
}

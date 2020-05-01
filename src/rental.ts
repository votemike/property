import {round} from './helpers';

export interface RentalInterface {
  monthlyRent: number;
  lettingFee: number;
}

export default class Rental implements RentalInterface {
  monthlyRent: number;
  lettingFee: number;

  constructor(monthlyRent: number, lettingFee: number) {
    this.monthlyRent = monthlyRent;
    this.lettingFee = lettingFee;
  }

  get monthlyIncome() {
    return round(this.monthlyRent - (this.monthlyRent * this.lettingFee / 100));
  }

  static fromJson(json: RentalInterface): Rental {
    const rental = Object.create(Rental.prototype);
    return Object.assign(rental, json);
  }
}

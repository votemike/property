import {round} from './helpers';

export default class Rental {
  monthlyRent: number;
  lettingFee: number;

  constructor(monthlyRent: number, lettingFee: number) {
    this.monthlyRent = monthlyRent;
    this.lettingFee = lettingFee;
  }

  get monthlyIncome() {
    return round(this.monthlyRent - (this.monthlyRent * this.lettingFee / 100));
  }
}

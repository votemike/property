import Dinero from 'dinero.js';

export default class Property {
  name: string;
  value: Dinero;
  leasehold: boolean;
  leaseExpiry: number | null;

  constructor() {
    this.name = 'mike';
    this.value = new Dinero({ amount: 5000, currency: 'EUR' });
    this.leasehold = true;
    this.leaseExpiry = 2147483647;
  }
}

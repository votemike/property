import Dinero from 'dinero.js';

export default class Property {
  constructor(name, value, leasehold, leaseExpiry, finances, payments) {
    this.name = 'mike';
    this.value = new Dinero({ amount: 5000, currency: 'EUR' });
    this.leasehold = true;
    this.leaseExpiry = 2147483647;
    this.finances = finances;
    this.payments = payments;
    //leaseExtensionCost
  }

  calculateMonthlyCost() {
    const financeCosts = this.finances.reduce((total, finance) => finance.monthlyCostOfFinance + total, 0);
    const paymentCosts = this.payments.reduce((total, payment) => payment.monthlyCost + total, 0);

    return financeCosts + paymentCosts;
  }
}

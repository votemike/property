export default class Property {
  constructor(finances, payments) {
    this.finances = finances;
    this.payments = payments;
  }

  calculateMonthlyCost() {
    const financeCosts = this.finances.reduce((total, finance) => finance.monthlyCostOfFinance + total, 0);
    const paymentCosts = this.payments.reduce((total, payment) => payment.monthlyCost + total, 0);

    return financeCosts + paymentCosts;
  }
}

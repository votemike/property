import Rental from "../../src/rental";

test('Monthly Income', () => {
  const payment = new Rental(1000, 10);
  expect(payment.monthlyIncome).toBe(900);
});

import Payment from '../../src/payment';

test('Yearly cost of yearly payment', () => {
  const payment = new Payment(200, 'yearly');
  expect(payment.yearlyCost).toBe(200);
});

test('Monthly cost of monthly payment', () => {
  const payment = new Payment(200, 'monthly');
  expect(payment.monthlyCost).toBe(200);
});

test('Monthly cost of yearly payment', () => {
  const payment = new Payment(66.66, 'yearly');
  expect(payment.monthlyCost).toBe(5.56);
});

test('Yearly cost of monthly payment', () => {
  const payment = new Payment(12, 'monthly');
  expect(payment.yearlyCost).toBe(144);
});

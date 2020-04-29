import Payment from '../../src/payment';

test('Yearly cost of yearly payment', () => {
  const aPayment = new Payment('something', 200, 'yearly');
  expect(aPayment.yearlyCost).toBe(200);
});

test('Monthly cost of monthly payment', () => {
  const aPayment = new Payment('something', 200, 'monthly');
  expect(aPayment.monthlyCost).toBe(200);
});

test('Monthly cost of yearly payment', () => {
  const aPayment = new Payment('something', 66.66, 'yearly');
  expect(aPayment.monthlyCost).toBe(5.56);
});

test('Yearly cost of monthly payment', () => {
  const aPayment = new Payment('something', 12, 'monthly');
  expect(aPayment.yearlyCost).toBe(144);
});

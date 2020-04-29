import Payment from '../../src/payment';

test('An invalid interval throws an exception', () => {
  expect(() => {
    new Payment(200, 'foo');
  }).toThrow();
});

test('Yearly cost of yearly payment', () => {
  const aPayment = new Payment(200, 'yearly');
  expect(aPayment.yearlyCost).toBe(200);
});

test('Monthly cost of monthly payment', () => {
  const aPayment = new Payment(200, 'monthly');
  expect(aPayment.monthlyCost).toBe(200);
});

test('Monthly cost of yearly payment', () => {
  const aPayment = new Payment(66.66, 'yearly');
  expect(aPayment.monthlyCost).toBe(5.56);
});

test('Yearly cost of monthly payment', () => {
  const aPayment = new Payment(12, 'monthly');
  expect(aPayment.yearlyCost).toBe(144);
});

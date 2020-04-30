import Finance from '../../src/finance';
import Payment from '../../src/payment';
import Property from '../../src/property';
import Rental from '../../src/rental';

test('Monthly cost of property', () => {
  const finances = [
    new Finance(100000, true, 35, 2.99, []),
    new Finance(10000, false, 1, 8, [])
  ];
  const payments = [
    new Payment(35, 'monthly'),
    new Payment(199, 'yearly')
  ];
  const property = new Property(finances, payments, []);
  expect(property.calculateMonthlyCost()).toBe(502.54);
});

test('Monthly income of property', () => {
  const rentals = [
    new Rental(1000, 10),
    new Rental(950, 10)
  ];
  const property = new Property([], [], rentals);
  expect(property.calculateMonthlyIncome()).toBe(1755.00);
});

test('Monthly profit of property', () => {
  const finances = [
    new Finance(100000, true, 35, 2.99, []),
    new Finance(10000, false, 1, 8, [])
  ];
  const payments = [
    new Payment(35, 'monthly'),
    new Payment(199, 'yearly')
  ];
  const rentals = [
    new Rental(1000, 10),
    new Rental(950, 10)
  ];
  const property = new Property(finances, payments, rentals);
  expect(property.calculateMonthlyProfit()).toBe(1252.46);
});

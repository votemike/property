import Finance from "../../src/finance";
import Payment from "../../src/payment";
import Property from "../../src/property";

test('Monthly cost of property', () => {
  const finances = [
    new Finance(100000, true, 35, 2.99, []),
    new Finance(10000, false, 1, 8, [])
  ];
  const payments = [
    new Payment(35, 'monthly'),
    new Payment(199, 'yearly')
  ];
  const property = new Property(finances, payments);
  expect(property.calculateMonthlyCost()).toBe(502.54);
});

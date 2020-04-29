import Finance from "../../src/finance";
import Payment from "../../src/payment";
import Property from "../../src/property";

test('Monthly cost of property', () => {
  const finances = [
    new Finance('something', 100000, true, 35, 2.99, []),
    new Finance('something', 10000, false, 1, 8, [])
  ];
  const payments = [
    new Payment('something', 35, 'monthly'),
    new Payment('something', 199, 'yearly')
  ];
  const aFinance = new Property('something', 200000, false, 2147483647, finances, payments);
  expect(aFinance.calculateMonthlyCost()).toBe(502.54);
});

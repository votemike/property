import Fee from '../../src/fee';
import Sale from '../../src/sale';

test('Total sale costs of property', () => {
  const fees = [
    new Fee(95),
    new Fee(45),
    new Fee(8000),
  ];
  const property = new Sale(200000, fees);
  expect(property.calculateTotalCosts()).toBe(208140);
});

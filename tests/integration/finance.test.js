import Fee from '../../src/fee';
import Finance from '../../src/finance';

test('Total cost of finance for interest only mortgage for 1 month and no fees', () => {
  const aFinance = new Finance('something', 200000, false, 1/12, 20, []);
  expect(aFinance.totalCostOfFinance).toBe(203333.33);
});

test('Total cost of finance for interest only mortgage for 1 year and no fees', () => {
  const aFinance = new Finance('something', 300000, false, 1, 5, []);
  expect(aFinance.totalCostOfFinance).toBe(315000.00);
});

test('Total cost of finance for interest only mortgage for 35 years and no fees', () => {
  const aFinance = new Finance('something', 400000, false, 35, 10, []);
  expect(aFinance.totalCostOfFinance).toBe(1800000.00);
});

test('Total cost of finance for interest only mortgage for 1 year and two fees', () => {
  const aFinance = new Finance('something', 300000, false, 1, 5, [new Fee('mortgage-arrangement', 995), new Fee('valuation', 500)]);
  expect(aFinance.totalCostOfFinance).toBe(316495.00);
});

test('Monthly and yearly cost of finance for interest only mortgage for 35 years', () => {
  const aFinance = new Finance('something', 300000, false, 35, 5, []);
  expect(aFinance.monthlyCostOfFinance).toBe(1250.00);
  expect(aFinance.calculateYearlyCostOfFinance()).toBe(15000.00);
});

test('Total cost of finance for repayment mortgage for 1 month and no fees', () => {
  const aFinance = new Finance('something', 200000, true, 1/12, 20, []);
  expect(aFinance.totalCostOfFinance).toBe(203333.33);
});

test('Total cost of finance for repayment mortgage for 1 year and no fees', () => {
  const aFinance = new Finance('something', 300000, true, 1, 5, []);
  expect(aFinance.totalCostOfFinance).toBe(308186.93);
});

test('Total cost of finance for repayment mortgage for 35 years and no fees', () => {
  const aFinance = new Finance('something', 400000, true, 35, 10, []);
  expect(aFinance.totalCostOfFinance).toBe(1444249.68);
});

test('Total cost of finance for repayment mortgage for 1 year and two fees', () => {
  const aFinance = new Finance('something', 300000, true, 1, 5, [new Fee('mortgage-arrangement', 995), new Fee('valuation', 500)]);
  expect(aFinance.totalCostOfFinance).toBe(309681.93);
});

test('Monthly and yearly cost of finance for repayment mortgage for 35 years', () => {
  const aFinance = new Finance('something', 300000, true, 35, 5, []);
  expect(aFinance.monthlyCostOfFinance).toBe(1514.06);
  expect(aFinance.yearlyCostOfFinance).toBe(18168.76);
});

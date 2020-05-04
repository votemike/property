import Fee from '../../src/fee';
import Finance from '../../src/finance';

test('Total cost of finance for interest only mortgage for 1 month and no fees', () => {
  const finance = new Finance(200000, false, 1/12, 20, []);
  expect(finance.totalCostOfFinance).toBe(203333.33);
});

test('Total cost of finance for interest only mortgage for 1 year and no fees', () => {
  const finance = new Finance(300000, false, 1, 5, []);
  expect(finance.totalCostOfFinance).toBe(315000.00);
});

test('Total cost of finance for interest only mortgage for 35 years and no fees', () => {
  const finance = new Finance(400000, false, 35, 10, []);
  expect(finance.totalCostOfFinance).toBe(1800000.00);
});

test('Total cost of finance for interest only mortgage for 1 year and two fees', () => {
  const finance = new Finance(300000, false, 1, 5, [new Fee(995), new Fee(500)]);
  expect(finance.totalCostOfFinance).toBe(316495.00);
});

test('Monthly and yearly cost of finance for interest only mortgage for 35 years', () => {
  const finance = new Finance(300000, false, 35, 5, [], 2);
  expect(finance.monthlyTeaserCostOfFinance).toBe(500);
  expect(finance.yearlyTeaserOfFinance).toBe(6000);
  expect(finance.monthlyCostOfFinance).toBe(1250.00);
  expect(finance.yearlyCostOfFinance).toBe(15000.00);
});

test('Total cost of finance for repayment mortgage for 1 month and no fees', () => {
  const finance = new Finance(200000, true, 1/12, 20, []);
  expect(finance.totalCostOfFinance).toBe(203333.33);
});

test('Total cost of finance for repayment mortgage for 1 year and no fees', () => {
  const finance = new Finance(300000, true, 1, 5, []);
  expect(finance.totalCostOfFinance).toBe(308186.93);
});

test('Total cost of finance for repayment mortgage for 35 years and no fees', () => {
  const finance = new Finance(400000, true, 35, 10, []);
  expect(finance.totalCostOfFinance).toBe(1444249.68);
});

test('Total cost of finance for repayment mortgage for 1 year and two fees', () => {
  const finance = new Finance(300000, true, 1, 5, [new Fee(995), new Fee(500)]);
  expect(finance.totalCostOfFinance).toBe(309681.93);
});

test('Monthly and yearly cost of finance for repayment mortgage for 35 years', () => {
  const finance = new Finance(300000, true, 35, 5, [], 2);
  expect(finance.monthlyTeaserCostOfFinance).toBe(993.79);
  expect(finance.yearlyTeaserOfFinance).toBe(11925.46);
  expect(finance.monthlyCostOfFinance).toBe(1514.06);
  expect(finance.yearlyCostOfFinance).toBe(18168.76);
});

test('Teaser cost of finance when there is no teaser rate', () => {
  const finance = new Finance(300000, true, 35, 5, []);
  expect(finance.monthlyTeaserCostOfFinance).toBe(1514.06);
  expect(finance.yearlyTeaserOfFinance).toBe(18168.76);
});

test('Cost of finance with custom rate', () => {
  const finance = new Finance(120000, false, 35, 5, []);
  expect(finance.calculateMonthlyCostOfFinance(10)).toBe(1000);
  expect(finance.calculateYearlyCostOfFinance(10)).toBe(12000);
});

test('Total one off costs', () => {
  const finance = new Finance(300000, true, 1, 5, [new Fee(995), new Fee(500)]);
  expect(finance.totalOneOffCosts).toBe(1495.00);
});

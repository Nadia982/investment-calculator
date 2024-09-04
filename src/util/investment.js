// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedProfit: The expected (annual) rate of profit
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedProfit,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const profitEarnedInYear = investmentValue * (expectedProfit / 100);
    investmentValue += profitEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      profit: profitEarnedInYear, // the amount of profit earned in this year
      valueEndOfYear:  investmentValue, // investment value at end of year
      // valueEndOfYear:  Math.round(investmentValue * 100) / 100 , // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

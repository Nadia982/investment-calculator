import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].profit -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Profit Earnt in Year</th>
          <th>Cumulative Profit</th>
          <th>Cumulative Total Invested</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalProfit =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

            const totalInvested = yearData.valueEndOfYear - totalProfit;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.profit)}</td>
              <td>{formatter.format(totalProfit)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;

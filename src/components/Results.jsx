import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

const ResultsTable = ({input}) => {
const resultsData = calculateInvestmentResults(input);
console.log(resultsData);  
return (
    <section id="result">
      <p>Results</p>
    </section>
  )
}

export default ResultsTable

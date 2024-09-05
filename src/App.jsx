import { useState } from "react";
import Header from "./components/Header/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedProfit: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1 && userInput.initialInvestment >= 1 && userInput.annualInvestment >= 1 && userInput.expectedProfit >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter a value of 1 or greater in every field</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App

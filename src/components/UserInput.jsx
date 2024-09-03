const UserInput = ({onChange, userInput}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            id="initial-investment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input
            id="annual-investment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-profit">Expected return</label>
          <input
            id="expected-profit"
            type="number"
            required
            value={userInput.expectedProfit}
            onChange={(e) => onChange("expectedProfit", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;

// #user-input {
//     padding: 1rem;
//     max-width: 30rem;
//     margin: 2rem auto;
//     border-radius: 4px;
//     background: linear-gradient(180deg, #307e6c, #2b996d);
//   }

//   .input-group {
//     display: flex;
//     justify-content: space-evenly;
//     gap: 1.5rem;
//   }

//   #user-input label {
//     display: block;
//     margin-bottom: 0.25rem;
//     font-family: 'Roboto Condensed', sans-serif;
//     font-size: 0.5rem;
//     font-weight: bold;
//     text-transform: uppercase;
//   }

//   #user-input input {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #76c0ae;
//     border-radius: 0.25rem;
//     background-color: transparent;
//     color: #c2e9e0;
//     font-size: 1rem;
//   }

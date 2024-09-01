import React from "react";

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input id="initial-investment" type="number" required placeholder="10000" />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input id="annual-investment" type="number" required placeholder="1200" />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Expected return</label>
          <input id="initial-investment" type="number" required placeholder="6" />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" required placeholder="10" />
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

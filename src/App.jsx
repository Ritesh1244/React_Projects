import React, { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [Step, setStep] = useState(1); // Step starts at 1

  function NextUpdate() {
    setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep)); // Increment Step until 3
  }

  function PreviousUpdate() {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep)); // Decrement Step until 1
  }

  return (
    <div className='steps'>
      <div className='Numbers'>
        <div className={`${Step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${Step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${Step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <div className='mssg'>
        <p className='message'>Step {Step}: {messages[Step - 1]}</p> {/* Show the correct message */}
      </div>

      <div className='buttons'>
        <button
          style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}
          onClick={PreviousUpdate}
           // Disable if on the first step
        >
          <span>👈</span> Previous
        </button>
        <button
          style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}
          onClick={NextUpdate}
           // Disable if on the last step
        >
          Next <span>👉</span> <span>🤓</span>
        </button>
      </div>
    </div>
  );
}

export default App;

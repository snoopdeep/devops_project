import { useState } from "react";

export default function BMICalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    console.log(height);
    console.log(weight);
    const bmiValue = weight / (height * height);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height (m):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <br />
      <p>Your BMI is: {bmi}</p>
    </div>
  );
}

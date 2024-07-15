import { useState } from "react";

export default function BMICalc() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
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
      <br />
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
      <br />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <br />
      <br />
      <p>Your BMI is: {bmi}</p>
    </div>
  );
}

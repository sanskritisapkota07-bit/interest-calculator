# interest-calculator
        Simple and compound interest calculator
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interest Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="calculator">
    <h1>Interest Calculator</h1>
    <p>Simple & Compound Interest</p>

    <input type="number" id="principal" placeholder="Principal Amount">

    <input type="number" id="rate" placeholder="Interest Rate (%)">

    <input type="number" id="time" placeholder="Time (Years)">

    <select id="type">
      <option value="simple">Simple Interest</option>
      <option value="compound">Compound Interest</option>
    </select>

    <button onclick="calculate()">Calculate</button>

    <div id="result"></div>
  </div>

  <script src="script.js"></script>

</body>
</html>

function calculate() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);
  const type = document.getElementById("type").value;

  const result = document.getElementById("result");

  if (principal <= 0 || rate < 0 || time <= 0) {
    result.textContent = "Please enter valid values.";
    return;
  }

  let interest;
  let total;

  if (type === "simple") {
    interest = (principal * rate * time) / 100;
    total = principal + interest;
  } else {
    total = principal * Math.pow(1 + rate / 100, time);
    interest = total - principal;
  }

  result.innerHTML = `
    Interest: €${interest.toFixed(2)}<br>
    Total Amount: €${total.toFixed(2)}
  `;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.calculator {
  width: 100%;
  max-width: 430px;
  padding: 35px;
  background: white;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #222;
  font-size: 30px;
  margin-bottom: 8px;
}

p {
  color: #777;
  margin-bottom: 28px;
}

input,
select {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
}

input:focus,
select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
}

button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: #667eea;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  transform: translateY(-2px);
  background: #5568d9;
}

#result {
  margin-top: 25px;
  padding: 18px;
  border-radius: 14px;
  background: #f4f4ff;
  color: #333;
  font-size: 18px;
  line-height: 1.8;
}


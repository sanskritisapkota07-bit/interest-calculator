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

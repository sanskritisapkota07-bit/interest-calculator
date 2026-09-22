function calculateInterest() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  if (principal <= 0 || rate < 0 || time <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid values.";
    return;
  }

  const simpleInterest = (principal * rate * time) / 100;
  const simpleTotal = principal + simpleInterest;

  const compoundTotal =
    principal * Math.pow(1 + rate / 100, time);

  const compoundInterest = compoundTotal - principal;

  document.getElementById("result").innerHTML =
    `Simple Interest: ${simpleInterest.toFixed(2)}<br>
     Simple Total: ${simpleTotal.toFixed(2)}<br><br>
     Compound Interest: ${compoundInterest.toFixed(2)}<br>
     Compound Total: ${compoundTotal.toFixed(2)}`;
}
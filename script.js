function calculateLoan() {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const interestRate = parseFloat(
    document.getElementById("InterestRate").value
  );
  const loanInputTerm = parseFloat(
    document.getElementById("loanInputTerm").value
  );

  console.log(loanAmount);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanInputTerm)) {
    alert("Please enter valid number");
    return;
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = loanInputTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayments));
  const totalInterest = monthlyPayment * totalPayments - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ` <p>
        <strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong>
      </p>
      <p>
        <strong>Interest To Pay: ${totalInterest.toFixed(2)}</strong>
      </p>`;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

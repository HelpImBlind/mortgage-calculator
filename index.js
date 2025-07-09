const clearAll = document.getElementById('clearAll');
let mortAmount = document.getElementById('mortgageAmount');
let mortRate = document.getElementById('interestRate');
let mortTerm = document.getElementById('mortgageTerm');
const repayment = document.getElementById('repayment');
const interest = document.getElementById('interestOnly');
let resultsPerMonth = document.getElementById('resultPerMonth');
let resultOverTerm = document.getElementById('resultOverTerm');

// Clears results from form and results
clearAll.addEventListener('click', function() {
    mortAmount.value = '';
    mortRate.value = '';
    mortTerm.value = '';
    repayment.checked = false;
    interest.checked = false;
    resultsPerMonth.textContent = '';
    resultOverTerm.textContent = '';
});

document.getElementById('calculateRepayments').addEventListener('click', function() {
    // let principal = parseFloat(mortAmount.value);
    // let rate = parseFloat(mortRate.value) / 100 / 12;
    // let term = parseFloat(mortTerm.value) * 12;
    // let monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
    // let totalPayment = monthlyPayment * term;
    // resultsPerMonth.textContent = `£${monthlyPayment.toFixed(2)}`;
    // resultOverTerm.textContent = `£${totalPayment.toFixed(2)}`;

    preventDefault();
    
});

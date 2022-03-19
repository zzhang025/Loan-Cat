// Javascript

function getValue(){
    // Obtain Inputs from the page
    let amount = document.getElementById("LoanAmount");
    let terms = document.getElementById("Terms");
    let interest = document.getElementById("InterestRate");

    // Calculate for each parameter
    result = loanCalculator(amount,terms,interest);

    // Generate Detailed Monthly Payment
    display(result);
}

function loanCalculator(amount,terms,interest){
    let result={};
    // For loop
    for (let i = 1; i <= terms; i++) {
    result.month.push(i);

    

    }
    return result;
}
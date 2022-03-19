// Javascript

function getValues(){
    // Obtain Inputs from the page
    let amount = document.getElementById("LoanAmount").value;
    let terms = document.getElementById("Terms").value;
    let interest = document.getElementById("InterestRate").value;

    // Calculate for each parameter
    result = loanCalculator(amount,terms,interest);

    // Generate Detailed Monthly Payment
    display(result);
}

function loanCalculator(amount,terms,interest){
    let result = {
        month:[],
        payment:[],
        interestpaid:[],
        principal:[],
        totalinterest=0,
        balance:[]
    };
    let monthly = (amount * (interest/1200))/(1-1/((1+interest/1200)**(terms)));
    monthly = monthly.toFixed(2);
    let balance = amount;
    // For loop
    for (let i = 1; i <= terms; i++) {
    result.month.push(i);
    result.payment.push(monthly);
    result.interestpaid.push((balance * interest/1200).toFixed(2));
    result.principal.push((monthly-balance * interest/1200).toFixed(2));
    result.totalinterest +=(balance * interest/1200).toFixed(2);
    result.balance.push((balance-(monthly-balance * interest/1200)).toFixed(2));
    balance = balance-(monthly-balance * interest/1200).toFixed(2); 


    }
    return result;
}
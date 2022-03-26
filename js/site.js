// Javascript

function getValues(){
    // Obtain Inputs from the page
    let amount = document.getElementById("LoanAmount").value;
    let terms = document.getElementById("Terms").value;
    let interest = document.getElementById("InterestRate").value;

    // Calculate for each parameter
    result = loanCalculator(amount,terms,interest);

    // Generate Detailed Monthly Payment
    displayData(result);
}

function loanCalculator(amount,terms,interest){
    let result = {
        month:[],
        amount:0,
        payment:[],
        interestpaid:[],
        principal:[],
        balance:[],
        currentinterest:0,
        totalinterest:[],
        monthly:0,
        terms:0,
    };
    let monthly = (amount * (interest/1200))/(1-1/((1+interest/1200)**(terms)));
    monthly = monthly.toFixed(2);

    result.amount = amount;
    result.monthly = monthly;
    result.terms = terms;
    let balance = amount;
    // For loop
    for (let i = 1; i <= terms; i++) {
    result.month.push(i);
    result.payment.push(monthly);
    result.interestpaid.push((balance * interest/1200).toFixed(2));
    result.principal.push((monthly-balance * interest/1200).toFixed(2));
    result.currentinterest += Number((balance * interest/1200).toFixed(2));
    result.totalinterest.push(result.currentinterest.toFixed(2));
    result.balance.push((balance-(monthly-balance * interest/1200)).toFixed(2));
    balance = balance-(monthly-balance * interest/1200).toFixed(2); 
    }
    return result;
}

// Display Function
function displayData(result){

    document.getElementById("result").classList.remove("invisible")

    //Get the table body element from the page
    let tablebody = document.getElementById("detail");

    //Get the templat row
    let templateRow = document.getElementById("fbTemplate");

    //Display Aggregated Parameters
    document.getElementById("montly").innerHTML=result.monthly;
    document.getElementById("total_principal").innerHTML=result.amount;
    document.getElementById("total_interest").innerHTML=result.currentinterest.toFixed(2);
    document.getElementById("total_cost").innerHTML=(result.monthly*result.terms).toFixed(2);


    //Clear table first
    tablebody.interHTML="";
    for (let index = 0; index < result.month.length; index ++) {

        let tableRow = document.importNode(templateRow.content,true);
        
        //Grab the td put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(result[index]);
        rowCols[0].textContent = result.month[index]; 

        rowCols[1].classList.add(result[index]);
        rowCols[1].textContent = result.payment[index];

        rowCols[2].classList.add(result[index]);
        rowCols[2].textContent = result.principal[index];

        rowCols[3].classList.add(result[index]);
        rowCols[3].textContent = result.interestpaid[index];

        rowCols[4].classList.add(result[index]);
        rowCols[4].textContent += result.totalinterest[index];

        rowCols[5].classList.add(result[index]);
        rowCols[5].textContent = result.balance[index];

        
        tablebody.appendChild(tableRow);
    }

}
let marsCost = 500;
let moonCost = 300;
function updateTicketNumber(marsOrMoon, cost, isIncreasing){
    let ticketInput = document.getElementById(marsOrMoon + '-ticket');
    ticketNumbers = ticketInput.value;
    if(isIncreasing == true){
        ticketNumbers = parseInt(ticketNumbers) + 1;
    }
    else if(isIncreasing == false && ticketNumbers > 0){
        ticketNumbers = parseInt(ticketNumbers) - 1;
    }
    ticketInput.value = ticketNumbers;

    const totalInput = document.getElementById(marsOrMoon + '-total');
    totalInput.innerText = ticketNumbers * cost;

    calculateTotalCost();

}
function getInputValue(marsOrMoon){
    const inputNumber = document.getElementById(marsOrMoon + '-ticket').value;
    return inputNumber;
}

function calculateTotalCost(){
    const marsTotalCost = getInputValue('mars') * 500;
    const moonTotalCost = getInputValue('moon') * 300;
    const totalCost = marsTotalCost + moonTotalCost;

    // update on html file 
    document.getElementById('total-cost').innerText = totalCost;
}


document.getElementById('mars-plus').addEventListener('click', function(){
    updateTicketNumber('mars', 500 ,true);
});
document.getElementById('mars-minus').addEventListener('click', function(){
    updateTicketNumber('mars', 500, false);

});
document.getElementById('moon-plus').addEventListener('click', function(){
    updateTicketNumber('moon', 300, true);

});
document.getElementById('moon-minus').addEventListener('click', function(){
    updateTicketNumber('moon', 300,  false);
});
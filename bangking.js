
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
   const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    
    //clear input filed 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const praviousTotal = parseFloat(  totalText);
    totalElement.innerText = amount + praviousTotal;

}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}


function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal =  getCurrentBalance();
    if(isAdd ==  true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposite-button').addEventListener('click', function(){
    const dipositAmount = getInputValue('deposite-input');
    if(dipositAmount > 0){
        updateTotalField('deposite-total', dipositAmount);
        updateBalance(dipositAmount, true);
    
    }
  

//    const depositeInput = document.getElementById('deposite-input');
//    const dipositAmountText = depositeInput.value ;
//    const dipositAmount = parseFloat(dipositAmountText);
  
    //get curent deposit
    // const dipositTotal = document.getElementById('deposite-total');
    // const dipositTotalText = dipositTotal.innerText;
    // const praviousDepositTotal = parseFloat(dipositTotalText);
    // dipositTotal.innerText = dipositAmount + praviousDepositTotal;

    //update balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + dipositAmount;

})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 &&  withdrawAmount < currentBalance){
        updateTotalField('withdraw-total',withdrawAmount );
        updateBalance(withdrawAmount, false);
    }
    
    if ( withdrawAmount > currentBalance){
        console.log('you can not withdraw more then what  you have in your account');
    }


    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value ;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    //update withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    //update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // //clear withdraw
    // withdrawInput.value = '';

});

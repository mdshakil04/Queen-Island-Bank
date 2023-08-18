// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // Step-2
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);
//     depositField.value = '';
//     // Step-3
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalString);
//     // Step-4
//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalElement.innerText = newDepositTotal;
//     // update Total balance
//     const totalBalanceElement = document.getElementById('balance-total');
//     const previousTotalBalanceString = totalBalanceElement.innerText;
//     const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);
//     // Total Calculation
//     const newTotalBalance = previousTotalBalanceAmount + newDepositAmount;
//     totalBalanceElement.innerText = newTotalBalance;
    
// })
//---------- Other Option------------

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})
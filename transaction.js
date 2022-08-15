// transaction part 


// deposite button 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountElement = document.getElementById('deposit-amount');
    const totalAmountElement = document.getElementById('total-amount')
    const depositFieldValue = parseFloat(depositField.innerText);
    const depositAmount = parseFloat(depositAmountElement.value);
    const totalAmount = parseFloat(totalAmountElement.innerText);
    if(depositAmount > 0){
        depositField.innerText = depositFieldValue + depositAmount;
        totalAmountElement.innerText = totalAmount + depositAmount;
    }else{
        alert('invalid amount!')
    }
    depositAmountElement.value = ''
});


// withdraw button 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const totalAmountElement = document.getElementById('total-amount');

    const withdrawFieldValue = parseFloat(withdrawField.innerText);
    const withdrawAmount = parseFloat(withdrawAmountElement.value);
    const totalAmount = parseFloat(totalAmountElement.innerText);

    if(withdrawAmount > 0 && withdrawAmount <= totalAmount){
        withdrawField.innerText = withdrawFieldValue + withdrawAmount;
        totalAmountElement.innerText = totalAmount - withdrawAmount;
    }else if(withdrawAmount > totalAmount){
        alert('Insufficient amount of money!')
    }
    else{
        alert('invalid amount!');
    }
    withdrawAmountElement.value = '';
});

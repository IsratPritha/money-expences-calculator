

function getInputValue(inputId){
const inputField = document.getElementById(inputId);
const inputAmountText =inputField.value;
const inputAmount = parseFloat(inputAmountText);
 // set clear
inputField.value='';
return inputAmount;
}

document.getElementById('calculate-btn').addEventListener('click',function(){

const incomeAmount =getInputValue('monthly-income');
const foodAmount = getInputValue('food-cost');
const rentAmount = getInputValue('rent-cost');
const clothsAmount = getInputValue('cloths-cost');

const errorMessage = document.getElementById ('error');
const TextColorError = document.getElementById("error").style.color="red";


         

  let messages =[]
  if(isNaN(incomeAmount && foodAmount && rentAmount && clothsAmount)){
    messages.push('Please Type Number value.');
    errorMessage.innerText=messages;
  }

  if(incomeAmount <0){
   messages.push('Please income Amount feild Type positive Number value.');
     errorMessage.innerText=messages;
  
 }
 
 if(foodAmount <0){
   messages.push('Please food Amount feild Type positive Number value.');
     errorMessage.innerText=messages;
  
 }
 
 if(rentAmount <0){
   messages.push('Please rent Amount feild Type positive Number value.');
     errorMessage.innerText=messages;
     }

 if(clothsAmount <0){
   messages.push('Please cloths Amount feild Type positive Number value.');
     errorMessage.innerText=messages;
  
 }




//  for show total expence
const expenseTotalFood =document.getElementById('total-expense');
const everyExpence = foodAmount + clothsAmount + rentAmount;
expenseTotalFood.innerText= everyExpence;


// for showing balance 
const balanceTotal =document.getElementById('balance');
balance = incomeAmount - everyExpence;
balanceTotal.innerText= balance;
});

// for SAVEAMOUNT EVENTHANDLER

document.getElementById('save-amount').addEventListener('click',function(){
    const saveAmount=getInputValue('save');
 
 //  showing saving input
 
      const saveTotal =document.getElementById('withparcent-save-amount');
       const parcentSaving = balance / 100* saveAmount;
       saveTotal.innerHTML= parcentSaving;

      //  for error message 
       const errorMessageOne = document.getElementById ('error1');
       const TextColorError = document.getElementById("error").style.color="red";
       let message =[]
  
      if(isNaN(saveAmount)){
       message.push('Please Type Number value.');
       errorMessageOne.innerText=message;
   }
 
   if(saveAmount<0){
     message.push('Please Save Amount feild Type positive Number value.');
       errorMessageOne.innerText=message;
    
   }
 
    // for remaining balance 
    const remaingTotal = document.getElementById('remaining-balance');
    const afterSavingBalance = balance-parcentSaving;
    remaingTotal.innerHTML = afterSavingBalance;
 });
document.getElementById('btn-deposit').addEventListener('click',function (){
   const depositInputNumberValue= getValueFromInputField('deposit-input');

   if(depositInputNumberValue === 'number'){
    alert('Enter valid Amount');
    return;
   }
//    console.log(depositInputNumberValue);
   const depositElementNumberValue=getValueFromElementField('total-deposit-element');
//    console.log(depositElementNumberValue);

const updatedDepositElementValue=depositElementNumberValue + depositInputNumberValue;
setValueToElementField('total-deposit-element',updatedDepositElementValue);


// available balance;data pass
const availableElementNumberValue =getValueFromElementField('available-balance-element');
// console.log(availableElementNumberValue);
const updatedAvailableBalance = availableElementNumberValue + depositInputNumberValue;
setValueToElementField('available-balance-element',updatedAvailableBalance);



})
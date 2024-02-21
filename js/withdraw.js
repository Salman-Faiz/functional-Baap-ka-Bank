document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawInputValue= getValueFromInputField('withdraw-input');

    const withdrawElementValue =getValueFromElementField('total-withdraw-element');
    

    

    const availableElementNumberValue =getValueFromElementField('available-balance-element');
    // console.log(availableElementNumberValue);
    if(availableElementNumberValue < withdrawInputValue){
        alert('insufficient Balance');
        return;
    }
    const updatedWithdrawElementValue =withdrawElementValue+withdrawInputValue;
    setValueToElementField('total-withdraw-element',updatedWithdrawElementValue);
    const updatedAvailableBalance = availableElementNumberValue - withdrawInputValue;
    setValueToElementField('available-balance-element',updatedAvailableBalance);
    
   
})
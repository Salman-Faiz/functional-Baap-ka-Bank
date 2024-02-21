// get value..............;;;;;;;;;;;;;;;;;;;;;;;;;
function getValueFromInputField(inputId){
    const inputValue=document.getElementById(inputId);
    const inputValueString=inputValue.value;
    const inputValueNumber=parseFloat(inputValueString);
    inputValue.value='';
    return inputValueNumber;
}

function getValueFromElementField(elementId){
    const elementValue =document.getElementById(elementId);
    const elementValueString =elementValue.innerText;
    const elementValueNumber=parseFloat(elementValueString);
    return elementValueNumber;
}


// set value,,,,,,,,,,,,,,,,,;;;;;;;;;;;;;;;;;;;;;;;;;;;

function setValueToElementField(elementId,finalValue){
    const previousElementValue= document.getElementById(elementId);
    previousElementValue.innerText=finalValue;

}
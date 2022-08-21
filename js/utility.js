// For all Input Field
function getElementValueById(inputField){
    const previousCost = document.getElementById(inputField);
    const previousCostString = previousCost.value;
    const newCostAmount = parseFloat(previousCostString);
    return newCostAmount;
}
// For all text element
function getTextElementValueById(textElement){
    const previousCost = document.getElementById(textElement);
    const previousCostString = previousCost.innerText;
    const newCostAmount = parseFloat(previousCostString);
    return newCostAmount;
}
// For set Values
function setTextElementValue(elementId, newValue){
    const previousElement = document.getElementById(elementId);
    previousElement.innerText = newValue;
}
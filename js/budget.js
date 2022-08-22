document.getElementById('btn-calculate').addEventListener('click',function(){
    playerExpenses();
})

function playerExpenses(){
    const perPlayer = getElementValueById('per-player');
    const forPlayerExpenses = getTextElementValueById('playerExpenses');
    setTextElementValue('playerExpenses', perPlayer*playerArray.length);
    return forPlayerExpenses;
}

document.getElementById('calculateTotal').addEventListener('click', function(){
    const managerCost = getElementValueById('manager-cost');
    const coachCost = getElementValueById('coach-cost');
    const playerCost = playerExpenses();
    
    const totalCost = managerCost+coachCost+playerCost;

    const total = getTextElementValueById('total');
    setTextElementValue('total', totalCost);
})
    

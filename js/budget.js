document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayer = getElementValueById('per-player');
    let forPlayerExpenses = getTextElementValueById('playerExpenses');
    setTextElementValue('playerExpenses', perPlayer*5);
})
    

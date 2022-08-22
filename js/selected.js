const playerArray = [];

function display(player){
    console.log(player);
    const playerList = document.getElementById('player-list');
    playerList.innerText = '';

    for(let i =0; i < playerArray.length; i++){
        const eachPlayerName = playerArray[i].playerName;

        const li = document.createElement('li');

        li.innerText= (eachPlayerName);
        playerList.appendChild(li);
    }
}

function addToSelect(select){
    const playerName =select.parentNode.children[0].innerText;
 
    const playerObj = {
        playerName: playerName,
    }

    playerArray.push(playerObj);
    
    if(playerArray.length>5){
        return alert("You can't add more than five.")
    }
    
    document.getElementById('selected-num').innerText = playerArray.length;
    
    display(playerArray);
}


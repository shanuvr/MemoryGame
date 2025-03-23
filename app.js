
let shuffledArray = (cardarray)=>{
    for(let i=cardarray.length-1;i>0;i--){
        let j = Math.random() *(i+1);
        j = Math.floor(j);
        let temp = cardarray[i];
        cardarray[i] = cardarray[j];
        cardarray[j] = temp;
    }
    return cardarray;
}

let shuffledArray1 = shuffledArray(cardarray);
console.log(shuffledArray1);
let griddisplay = document.getElementById("grid");
let cardschosen = [];
let cardschosecids = [];
let cardswon = [];

function createBoard(){
    for(i=0;i<cardarray.length;i++){
        let cards = document.createElement('img');
        cards.setAttribute('src','Assets/blank.png');
        cards.setAttribute('data-id',i);
        griddisplay.appendChild(cards)
        cards.addEventListener('click',flipcard);

    }
   
}
function flipcard(){
    cardid = this.getAttribute('data-id');
    this.setAttribute('src',cardarray[cardid].img);
    cardschosen.push(cardarray[cardid].name);
    cardschosecids.push(cardid)
    console.log(cardschosen);
    if(cardschosen.length===2){
        setTimeout(checkforamatch,500);
    }
    
    

}
function checkforamatch(){
    let cards2 = document.querySelectorAll('img')
    if(cardschosen[0]===cardschosen[1]){
        alert("its match")
        cards2[cardschosecids[0]].setAttribute('src','Assets/white.png');
        cards2[cardschosecids[1]].setAttribute('src','Assets/white.png');
        cards2[cardschosecids[1]].removeEventListener('click',flipcard);
        cards2[cardschosecids[0]].removeEventListener('click',flipcard);
        cardswon.push(cardschosen);

    }
    else{
        cards2[cardschosecids[0]].setAttribute('src','Assets/blank.png');
        cards2[cardschosecids[1]].setAttribute('src','Assets/blank.png');
        

    }
    cardschosen = [];
    cardschosecids =[];
    console.log("checkinbg");


    if(cardswon.length===cardarray.length/2){
    alert("you won Restarting the game.........");
    griddisplay.innerHTML ='';
    createBoard();

}
    
}


createBoard();


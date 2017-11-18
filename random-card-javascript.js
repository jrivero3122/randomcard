var rankOfCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var randomofCard = rankOfCard[Math.floor(Math.random()*rankOfCard.length)];

var typeOfCard = ["<div id='spade'>"+randomofCard+"</div>", "<div id='diamond'>"+randomofCard+"</div>" , "<div id='heart'>"+randomofCard+"</div>", "<div id='clover'>"+randomofCard+"</div>"];
var randomTypeCard = typeOfCard[Math.floor(Math.random()*4)];

document.getElementById("type").innerHTML = randomTypeCard;
function diceone(randomNumber) {

    if (randomNumber == 1) {
        document.querySelector(".image").setAttribute("src", "images/dice1.png");
    } else if (randomNumber == 2) {
        document.querySelector(".image").setAttribute("src", "images/dice2.png");
    } else if (randomNumber == 3) {
        document.querySelector(".image").setAttribute("src", "images/dice3.png");
    } else if (randomNumber == 4) {
        document.querySelector(".image").setAttribute("src", "images/dice4.png");
    } else if (randomNumber == 5) {
        document.querySelector(".image").setAttribute("src", "images/dice5.png");
    } else if (randomNumber == 6) {
        document.querySelector(".image").setAttribute("src", "images/dice6.png");
    }
}

function dicetwo(randomNumber2) {
    if (randomNumber2 == 1) {
        document.querySelector(".image2").setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 == 2) {
        document.querySelector(".image2").setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 == 3) {
        document.querySelector(".image2").setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 == 4) {
        document.querySelector(".image2").setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 == 5) {
        document.querySelector(".image2").setAttribute("src", "images/dice5.png");
    } else if (randomNumber2 == 6) {
        document.querySelector(".image2").setAttribute("src", "images/dice6.png");
    }
}

var count=document.querySelectorAll("img").length;
for(var i=0;i<count;i++)
{
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        var randomNumber = Math.floor(Math.random() * 6 + 1);
    
        var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    
        
    
        diceone(randomNumber);
        dicetwo(randomNumber2);
    
        if (randomNumber > randomNumber2) {
             document.querySelector(".heading").innerHTML = "Player 1 WINS";
        } else if (randomNumber2 > randomNumber) {
             document.querySelector(".heading").innerHTML = "Player 2 WINS";
        } else {
             document.querySelector(".heading").innerHTML = "THE MATCH IS DRAW";
        }
    })
}


//ek b nhi chlrha h 
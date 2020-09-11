//will need a queryselector for the buttons as we want the pc to roll as soon as any of the buttons are clicked
//random number gives a value between 1-100, 1-33= rock 34-66= paper 67-100= scissor
//Change image depending on what pc rolls
//compare the input of button vs pc roll
// add win/lose/draw message
// figure out how to swap alt messages for inclusion


    var pcChoise;
    var replaceImage = document.createElement("img");
    var playerChoise;
    var randNumber = Math.floor(Math.random() * 100) + 1;
    var yourWincounter = 0;
    var opponentWinCounter = 0;


    console.log(randNumber);
document.getElementById("end").addEventListener("click",function (){
    yourWincounter=0;
    opponentWinCounter=0;
    document.getElementById("playerWinCounter").innerHTML= "you: "+yourWincounter;
    document.getElementById("pcWinCounter").innerHTML="opponent: "+opponentWinCounter;
})
    playerTurn();
function playerTurn(){
    document.getElementById("paper").addEventListener('click', function () {
        playerChoise = "paper";
        console.log("you chose paper");
        document.getElementById("paper").style.background = '#000000';
        document.getElementById("rock").style.background = 'rgb(0, 123, 255)';
        document.getElementById("scissors").style.background = 'rgb(0, 123, 255)';
        pcTurn();
    })
    document.getElementById("rock").addEventListener('click', function () {
        playerChoise = "rock";
        document.getElementById("rock").style.background = '#000000';
        document.getElementById("paper").style.background = 'rgb(0, 123, 255)';
        document.getElementById("scissors").style.background = 'rgb(0, 123, 255)';
        console.log("you chose rock");
        pcTurn();
    })
    document.getElementById("scissors").addEventListener('click', function () {
        playerChoise = "scissors"
        document.getElementById("scissors").style.background = '#000000';
        document.getElementById("paper").style.background = 'rgb(0, 123, 255)';
        document.getElementById("rock").style.background = 'rgb(0, 123, 255)';
        console.log("You chose scissors");
        pcTurn();
    })
}


    function pcTurn() {
    let newRandNumber=Math.floor(Math.random() * 100) + 1;
        randNumber=newRandNumber;
        if (randNumber <= 33) {
            pcChoise = "rock";
            console.log("rock");
            replaceImage.src = "./Resources/rock.png";
            document.getElementById("target").src = replaceImage.src;
            document.getElementById("target").alt = "image of a rock";
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise;
            isItWinning()

        } else if (randNumber > 34 && randNumber <= 66) {
            pcChoise = "paper";
            console.log("paper");
            replaceImage.src = "./Resources/paper.png";
            document.getElementById("target").src = replaceImage.src;
            document.getElementById("target").alt = "image of a piece of paper";
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise;
            isItWinning()
        } else {
            pcChoise = "scissors"
            console.log("scissors");
            replaceImage.src = "./Resources/scissor.png";
            document.getElementById("target").src = replaceImage.src;
            document.getElementById("target").alt = "image of a pair of scissors";
            isItWinning()

        }
    }

    function isItWinning() {

        if (playerChoise === pcChoise) {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " It's a draw";

        } else if (playerChoise === "rock" && pcChoise === "paper") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You lost";
            opponentWinCounter++
        } else if (playerChoise === "rock" && pcChoise === "scissors") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You win!";
            yourWincounter++
        } else if (playerChoise === "paper" && pcChoise === "rock") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You win!";
            yourWincounter++
        } else if (playerChoise === "paper" && pcChoise === "scissors") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You lose";
            opponentWinCounter++
        } else if (playerChoise === "scissors" && pcChoise === "rock") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You lose";
            opponentWinCounter++
        } else if (playerChoise === "scissors" && pcChoise === "paper") {
            document.getElementById("result").innerHTML = "Your opponent chose: " + pcChoise + "." + " You win!";
            yourWincounter++
        }
        document.getElementById("playerWinCounter").innerHTML= "you: "+yourWincounter;
        document.getElementById("pcWinCounter").innerHTML="opponent: "+opponentWinCounter;

    }

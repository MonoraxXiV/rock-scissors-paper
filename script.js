//will need a queryselector for the buttons as we want the pc to roll as soon as any of the buttons are clicked
//random number gives a value between 1-100, 1-33= rock 34-66= paper 67-100= scissor
//Change image depending on what pc rolls
//compare the input of button vs pc roll
// add win/lose/draw message
// figure out how to swap alt messages for inclusion
let buttonsChoice = document.querySelectorAll("button")
var randNumber = Math.floor(Math.random() * 100) + 1;
var pcChoise;
var replaceImage = document.createElement("img");

console.log(randNumber);

if (randNumber <= 33) {
    pcChoise = "rock";
    console.log("rock");
    replaceImage.src = "./Resources/rock.png";
    document.getElementById("target").src = replaceImage.src;
    document.getElementById("target").alt = "image of a rock";
} else if (randNumber > 34 && randNumber <= 66) {
    pcChoise = "paper";
    console.log("paper");
    replaceImage.src = "./Resources/paper.png";
    document.getElementById("target").src = replaceImage.src;
    document.getElementById("target").alt = "image of a piece of paper";
} else {
    pcChoise = "scissors"
    console.log("scissor");
    replaceImage.src = "./Resources/scissor.png";
     document.getElementById("target").src = replaceImage.src;
    document.getElementById("target").alt = "image of a pair of scissors";
}
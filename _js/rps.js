const outcomes = ['rock','paper','scissors'];
var cpuChoice = 'hi';
function cpuGenerator (){
    let cpu = Math.floor(Math.random()*3);
    cpuChoice = outcomes[cpu];
}

function drawImg(pic, width, height, alt, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.getElementById(id).appendChild(x);
}
var win = 'none'
var tie = 'false'
function compare(player, cpu){
    if (player == "rock"){
        drawImg("_images/rock.jpg", "100", "100", "rock", "Player");  
    }
    if (player == "paper"){
        drawImg("_images/paper.jpg", "100", "100", "paper", "Player");  
    }
    if (player == "scissors"){
        drawImg("_images/scissors.jpg", "100", "100", "scissors", "Player");  
    }
    if (cpu == "rock"){
        drawImg("_images/rock.jpg", "100", "100", "rock", "Computer");  
    }
    if (cpu == "paper"){
        drawImg("_images/paper.jpg", "100", "100", "paper", "Computer");  
    }
    if (cpu == "scissors"){
        drawImg("_images/scissors.jpg", "100", "100", "scissors", "Computer");  
    }
    if (player == cpu){
        tie = 'true';
    }
    if ((player == 'rock') && (cpu == 'paper')){
        win = 'false';
    }
    if ((player == 'rock') && (cpu == 'scissors')){
        win = 'true';
    }
    if ((player == 'paper') && (cpu == 'rock')){
        win = 'true';
    }
    if ((player == 'paper') && (cpu == 'scissors')){
        win = 'false';
    }
    if ((player == 'scissors') && (cpu == 'rock')){
        win = 'false';
    }
    if ((player == 'scissors') && (cpu == 'paper')){
        win = 'true';
    }
}
// I got this from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeChild(id){
    var identity = document.getElementById(id);
    while (identity.firstChild){
        identity.removeChild(identity.firstChild);
    }
}
function displayWin (W,T,id){
    let selectText = ('You chose ' + playerChoice + ' and the computer chose ' +cpuChoice)
    if (W=='true') {
        winner = 'You won';
    } else if (W == 'false'){
        winner = 'The computer won!';
    }
    if (T="false"){
        id.textContent = (selectText + '\n' + winner);
    } else if (T='true') {
        id.textContent = ("It was a tie. Please redo!");
    }
}

let playerChoice = 'none'
function playChoice(choice){
    removeChild('Player')
    removeChild('Computer')
    playerChoice = choice;
    cpuGenerator();
    compare(playerChoice, cpuChoice);
    displayWin(win, tie, Results);
}
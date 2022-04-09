let myName = "Rohit";
console.log(myName);
// changes the heading
function init(){
    changeHeading();
    greeting();
}
function changeHeading(){
    let myHeading = document.querySelector ('h1');
    console.log(myHeading); //console is an object, thus this code is a method
    myHeading.textContent = 'Hello world!';
}
let greetingPrefix = "hello there, "

function greeting(){
    const para = document.createElement("p");
    para.innerText = greetingPrefix + myName;
    document.body.appendChild(para)
}
let playerChoice = 'none'
function rockChoice(){
    playerChoice = 'rock'
}
function paperChoice(){
    playerChoice = 'paper'
}
function scissorChoice(){
    playerChoice = 'scissors'
}

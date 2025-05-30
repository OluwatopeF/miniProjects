//  random number 
var num = 0;

// elements 
const answer = document.getElementById("result");

var yes = document.createTextNode("Your fortune WILL happen");
var no = document.createTextNode("Your fortune will NOT happen");
var maybe = document.createTextNode("Hmmmmmmmmm................?");


// tellFortune shows your fortune
function tellFortune(num){
    num = Math.floor(Math.random() * 3) + 1;
    console.log(num)

    if(num == 1){
        console.log("your fortune will happen");
        // answer.removeChild(no, maybe);
        answer.appendChild(yes);
        
    }
    else if(num == 2){
        console.log("your fortune will not happen");
        // answer.removeChild(yes, maybe);
        answer.appendChild(no);
    }
    else{
        console.log("IDK??..... Maybe?");
        // answer.removeChild(yes, no);
        answer.appendChild(maybe);
    }
};

// clearFortune: happens after first fortune
// removes the appened child before replacing
function clearFortune(){
    if(answer.childNodes.length > 0){
        console.log("removing old fortune");
        answer.removeChild(answer.firstChild);
    }
    else{
        console.log("Fortune Incoming");
        // have an animation playing or smth
    }
}

function combo(){
    clearFortune();
    tellFortune(num);
    
}

function clearText(){
    document.getElementById("textBox").reset();
}

// events
document.getElementById("fortuneBtn").addEventListener("click", combo);
document.getElementById("resetBtn").addEventListener("click", clearText);


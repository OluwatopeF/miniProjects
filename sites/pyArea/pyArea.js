// calculate the area
function getArea(){
    var aInput = document.getElementById('inputA').value;
    var bInput = document.getElementById('inputB').value;
    let area = aInput * bInput;
    console.log("a is :", aInput);
    console.log("b is :", bInput);
    console.log("area is: ", area);
    document.getElementById("resultNum").innerHTML = area;

    // show result after input
    result = document.getElementById("result");
    if(area){
        result.style.display = "flex";
    }
    else{
        result.style.display = "none";
    }

    
}

// to move to next input
document.getElementById('inputA').addEventListener("keypress", function (event){
    if(event.key === 'Enter'){
        event.preventDefault();    
        const currentElement = document.activeElement;
        const inputs = Array.from(document.querySelectorAll("input, textarea, select"));
        const currentIndex = inputs.indexOf(currentElement);
        if (currentIndex >= 0 && currentIndex < inputs.length - 1) {
           inputs[currentIndex + 1].focus();
         }
        }
});

// secret button: pressing enter clicks and sends result
document.getElementById('inputB').addEventListener("keypress", function (event){
    if(event.key === 'Enter'){
        document.getElementById("inputSend").click();
    }
});

// mainMenu: open menu(closed by default)
// NEEDS REWORK
function setMenu(){
    var m = document.getElementById('mainMenu');
    var styleBtnA = document.getElementById('styleMenubtnA');
    var styleBtnB = document.getElementById('styleMenubtnB');
    var lk = document.getElementById('returnLk');
    if(m.style.width != "3em"){
        // closes menu
        m.style.width= "3em";
        m.style.height= "3em";
        styleBtnA.style.display = "none";
        styleBtnB.style.display = "none";
        lk.style.display = "none";
    }
     else {
        // opens menu
        m.style.width = "8em";
        m.style.height = "8em";
        styleBtnA.style.display = "block";
        styleBtnB.style.display = "block";
        lk.style.display = "block";
    }
}

// Dark mode
function toDark(){
    var body = document.getElementById('body');
    var m = document.getElementById('mainMenu');
    var lk = document.getElementById('returnLk');
    var inA = document.getElementById('inputA');
    var inB = document.getElementById('inputB');

    if(body.style.backgroundColor != "black"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        m.style.backgroundColor = "white"
        m.style.color = "black";
        lk.style.color = "black";
        inA.style.backgroundColor = "white";
        inA.style.color = "black";
        inB.style.backgroundColor = "white";
        inB.style.color = "black";
    }
}

// Light Mode
function toLight(){
    var body = document.getElementById('body');
    var m = document.getElementById('mainMenu');
    var lk = document.getElementById('returnLk');
    var inA = document.getElementById('inputA');
    var inB = document.getElementById('inputB');

    if(body.style.backgroundColor != "white"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        m.style.backgroundColor = "black"
        m.style.color = "white";
        lk.style.color = "white";
        inA.style.backgroundColor = "black";
        inA.style.color = "white";
        inB.style.backgroundColor = "black";
        inB.style.color = "white";
    }
}

// Timer to emulate python terminal running
// ~2 seconds for each text
// Check if number is on input
// if there is show area result after ~2 seconds


let timeout1 = setTimeout(showStep1, 2000);
let timeout2 = setTimeout(showStep2, 3000);
let timeout3 = setTimeout(showStep3, 4000);


function showStep1(){
    var step1 = document.getElementById('step1');
    step1.style.display = "block";
}

function showStep2(){
    var step2 = document.getElementById('step2');
    step2.style.display = "block";
}

function showStep3(){
    
    var step3 = document.getElementById('step3');
    var step4 = document.getElementById('step4');
    step3.style.display = "flex";
    step4.style.display = "flex";
}


document.getElementById("inputSend").addEventListener("click", getArea);
document.getElementById("mainMenu").addEventListener("click", setMenu);
document.getElementById("styleMenubtnB").addEventListener("click", toDark);
document.getElementById("styleMenubtnA").addEventListener("click", toLight);
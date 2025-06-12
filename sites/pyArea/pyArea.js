// calculate the area
function getArea(){
    var aInput = document.getElementById('inputA').value;
    var bInput = document.getElementById('inputB').value;
    let area = aInput * bInput;
    console.log("a is :", aInput);
    console.log("b is :", bInput);
    console.log("area is: ", area);
    document.getElementById("resultNum").innerHTML = area;
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
    if(m.style.width != "3em"){
        // closes menu
        m.style.width= "3em";
        m.style.height= "3em";
        styleBtnA.style.display = "none";
        styleBtnB.style.display = "none";
    }
     else {
        // opens menu
        m.style.width = "8em";
        m.style.height = "3em";
        styleBtnA.style.display = "block";
        styleBtnB.style.display = "block";
    }
}

function toDark(){
    debugger;
    var body = document.getElementById('body');
    var m = document.getElementById('mainMenu');
    if(body.style.backgroundColor != "black"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        m.style.backgroundColor = "white"
        m.style.color = "black";
    }
}

function toLight(){
    var body = document.getElementById('body');
    var m = document.getElementById('mainMenu');
    if(body.style.backgroundColor != "white"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        m.style.backgroundColor = "black"
        m.style.color = "white";
    }
}


document.getElementById("inputSend").addEventListener("click", getArea);
document.getElementById("mainMenu").addEventListener("click", setMenu);
document.getElementById("styleMenubtnB").addEventListener("click", toDark);
document.getElementById("styleMenubtnA").addEventListener("click", toLight);
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

document.getElementById("inputSend").addEventListener("click", getArea);
var aInput = document.getElementById("inputA").value;
var bInput = document.getElementById("inputB").value;

let area = aInput * bInput;

function getArea(){
    console.log(area);
}

// secret button: pressing enter clicks and sends result
document.getElementById('inputB').addEventListener("keypress", function (event){
    if(event.key === 'Enter'){
        // console.log("works");
        document.getElementById("inputSend").click();
    }
});


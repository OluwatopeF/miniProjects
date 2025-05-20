// 
var num = 0;

function tellFortune(num){
    num =Math.floor(Math.random() * 3) + 1;

    if(num == 1){
        console.log("your fortune will happen");
        // return answer
    }
    else if(num == 2){
        console.log("your fortune will not happen");
    }
    else{
        console.log("IDK??..... Maybe?");
    }
}



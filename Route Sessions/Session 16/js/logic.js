var userEmail = prompt("Enter your Email:");
var userPassword = prompt("Enter your Password:");
if(userEmail == "yousti@yahoo.com" && userPassword == "123"){
    console.log("Hello, Yousti");
}

var num1 = prompt("Enter Number 1:");
num1 = Number(num1);
// or num1= +num1; 


var num2 = +prompt("Enter number 2:");
// or var num2 = Number(prompt("Enter number 2:"));

var op = prompt("Enter an operation: + - * /");

switch(op){
    case "+":
        console.log(num1 + num2);
    break;
    case "-":
        console.log(num1 - num2);
    break;
    case "*":
        console.log(num1 * num2);
    break;
    case "/":
        if(num2 === 0){
            console.log("Can't devide by 0");
        }
        else{
            console.log(num1 / num2);
        }
    break;
}


const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');

let sign;
let c = 1;
let counter = 1;
let result;
let numbers = {
    num1: "",
    num2: "",
}

buttons.forEach(button => {
    if (Number.isInteger(+button.textContent)){
        display.textContent = "";
        button.addEventListener("click", () =>{
            if (counter != 2){
                numbers[`num${c}`] += button.textContent;
                populate(button)
            }else if (counter === 2){
                if (result === numbers.num1){
                    display.textContent = "";
                    result = 0;
            }
            numbers[`num${c}`] += button.textContent;
            populate(button)
            }
        })
    }else if (button.textContent === "="){
        button.addEventListener("click", () =>{
            result = operate(sign,+numbers.num1,+numbers.num2);
            display.textContent = result;
        })
    }else if (button.textContent === "AC" || button.textContent === "C"){
        button.addEventListener("click", () =>{
            display.textContent = 0;
            c = 1;
            counter = 1;
            sign = "";
            numbers.num1 = "";
            numbers.num2 = "";
        })
    }else{
        button.addEventListener("click", () =>{
            operator(button)
        });
    }
})

function operator(button){
    if (numbers.num2 === ""){
        display.textContent = "";
        c = 2;
        counter = 2;
    }else {
        numbers.num1 = operate(sign,+numbers.num1,+numbers.num2);
        numbers.num2 = "";
        display.textContent = numbers.num1;
        result = numbers.num1;
    }
    sign = button.textContent;
    //display.textContent ="";
}

function populate(button){
    display.textContent += button.textContent;
}

function operate(operator,a,b){
    if(operator === '+'){return add(a,b)}
    else if(operator === '-'){return subtract(a,b)}
    else if(operator === '*'){return multiply(a,b)}
    else{return divide(a,b)}
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');

let input1 = [];
let input2 = [];
let firstNum;
let sign;
let num;

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if (button.textContent === "="){
            display.textContent = operate(sign,firstNum,num);
       }else if (Number.isFinite(+button.textContent)){
            populate(button)
       }else{
            operator(button);
       }
    })
})

function operator(button){
    firstNum = +input1.join('').slice(0,8);
    sign = button.textContent;
    display.textContent = input1.length = 0;
}

function populate(button){
    input1.push(button.textContent);
    num = +input1.join('').slice(0,8);   
    return display.textContent = num;
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
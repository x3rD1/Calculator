let input1 = [];
let firstNum;
let sign;



const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if (button.textContent === "="){
            display.textContent = operate(sign,firstNum,+input1);
       }else if (Number.isFinite(+button.textContent)){
            populate(button)
       }else{
            operator(button);
       }
    })
})

function operator(button){
    firstNum = +input1.join('');
    sign = button.textContent;
    display.textContent = input1.length = 0;
}

function populate(button){
    let temp = display.textContent = button.textContent;
       input1.push(temp);
       return display.textContent = input1.join('');
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